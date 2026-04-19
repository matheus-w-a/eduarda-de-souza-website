# Deploy em producao

Este projeto e um site estatico (React + Vite). Ele foi preparado para:

- buildar fora da VPS (no GitHub Actions)
- publicar uma imagem Docker no GHCR (container registry do GitHub)
- rodar na VPS apenas como container Nginx servindo os arquivos estaticos
- rodar em paralelo com o admin-app, em uma stack docker-compose separada

## O que o CI faz

O workflow em `.github/workflows/publish-image.yml`:

1. instala dependencias (`npm ci`)
2. roda o typecheck (`npm run lint`)
3. gera o build de producao (`npm run build` -> `dist/`)
4. monta a imagem Docker final (nginx + arquivos estaticos)
5. publica a imagem no GHCR
6. faz deploy via SSH na VPS

A imagem publicada fica em `ghcr.io/<owner>/<repo>`.

## Estrutura da imagem

A imagem final:

- nao builda nada na VPS
- usa **Nginx** para servir `dist/`
- exibe o site na porta 3000 interna do container
- ja tem `try_files` configurado para SPA (React Router funciona em rotas aninhadas)

## Arquivos principais

- `Dockerfile`: multi-stage (Node para buildar, Nginx para servir)
- `nginx.conf`: configuracao do Nginx com fallback SPA e cache de assets
- `compose.prod.yml`: stack minima para a VPS (so o container do site)
- `.dockerignore`: arquivos ignorados ao montar a imagem
- `.github/workflows/publish-image.yml`: CI/CD

## Portas

Como a VPS ja roda o `admin-app` em `127.0.0.1:3000`, o site sobe em `127.0.0.1:3001`. O Nginx dentro do container ouve na porta 3000, e o `compose.prod.yml` faz o mapeamento `3001:3000`.

## Preparacao da VPS (primeira vez)

Sua VPS ja tem Docker e Docker Compose, entao basta criar uma pasta nova para o site. Exemplo:

```bash
mkdir -p /opt/duda-site
cd /opt/duda-site
```

Copie para essa pasta **apenas** o `compose.prod.yml`:

```bash
# copiar do repositorio para a VPS (exemplo com scp, rodado no seu computador)
scp compose.prod.yml usuario@vps:/opt/duda-site/
```

Nenhum arquivo de variavel de ambiente (`.env`) e necessario, porque o site nao tem backend nem banco.

## Secrets no GitHub

No repositorio GitHub do site, va em **Settings -> Secrets and variables -> Actions** e crie:

| Secret          | Valor                                                              |
| --------------- | ------------------------------------------------------------------ |
| `VPS_HOST`      | IP ou dominio da VPS                                               |
| `VPS_USER`      | usuario SSH da VPS (ex.: `root` ou `deploy`)                       |
| `VPS_SSH_KEY`   | chave privada SSH que tem acesso a VPS                             |
| `VPS_APP_DIR`   | caminho da pasta criada acima (ex.: `/opt/duda-site`)              |

> Dica: voce pode reaproveitar os **mesmos** `VPS_HOST`, `VPS_USER` e `VPS_SSH_KEY` do admin-app. So o `VPS_APP_DIR` precisa ser diferente, porque as pastas sao separadas.

## Acesso ao GHCR na VPS

Se o pacote estiver **publico**, a VPS faz pull sem autenticar.

Se estiver **privado**, faca login na VPS uma unica vez:

```bash
docker login ghcr.io
# username: seu usuario do GitHub
# password: um Personal Access Token com escopo "read:packages"
```

## Primeiro deploy (manual)

Primeiro, confirme que a imagem ja foi publicada pelo CI (aba Actions do repositorio tem que ter rodado verde pelo menos uma vez em `main`).

Na VPS:

```bash
cd /opt/duda-site
export DOCKER_IMAGE=ghcr.io/SEU_USUARIO/SEU_REPO:latest

docker compose -f compose.prod.yml pull
docker compose -f compose.prod.yml up -d
```

Verifique:

```bash
docker compose -f compose.prod.yml ps
curl -I http://127.0.0.1:3001
```

Voce deve ver `HTTP/1.1 200 OK` e o HTML do site.

## Deploys seguintes (automaticos)

A partir daqui, **todo push para a branch `main`** executa:

1. testes/typecheck/build
2. publicacao da imagem no GHCR
3. deploy automatico na VPS (o CI entra por SSH e atualiza a stack)

Voce nao precisa tocar na VPS manualmente.

## Proxy reverso (dominio + HTTPS)

A stack publica o site em `127.0.0.1:3001`. Voce precisa de um proxy (Nginx ou Caddy) para expor na internet com HTTPS.

Exemplo de bloco Nginx (rodando diretamente no host da VPS, fora do Docker):

```nginx
server {
  listen 80;
  server_name www.seudominio.com seudominio.com;

  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_http_version 1.1;
  }
}
```

Depois rode `certbot` (ou equivalente) para configurar HTTPS automatico.

## Resumo da topologia

```
Internet
   |
   v
[ Proxy reverso (Nginx/Caddy no host da VPS) ]
   |                                  |
   v                                  v
127.0.0.1:3000                  127.0.0.1:3001
(admin-app container)           (duda-site container)

   \_ /opt/duda                    \_ /opt/duda-site
       compose.prod.yml                 compose.prod.yml
       .env.production                  (sem .env)
```

As duas stacks sao totalmente **independentes**: voce pode subir, parar ou atualizar uma sem afetar a outra.

## Troubleshooting

**`docker compose ... up` reclama que `DOCKER_IMAGE` nao esta definido:**
exporte antes de subir manualmente:

```bash
export DOCKER_IMAGE=ghcr.io/SEU_USUARIO/SEU_REPO:latest
```

No deploy automatico isso e feito pelo CI, entao nao precisa se preocupar.

**`denied: permission_denied` ao fazer pull:**
O pacote GHCR esta privado e a VPS nao esta autenticada. Rode `docker login ghcr.io` na VPS.

**Site retorna 404 em rotas profundas (ex.: `/procedimentos/x`):**
Isso ja esta resolvido pelo `try_files ... /index.html` no `nginx.conf`. Se acontecer, confirme que `nginx.conf` foi corretamente copiado para dentro da imagem.

**Preciso rodar o build localmente para testar a imagem Docker?**

```bash
docker build -t duda-site:local .
docker run --rm -p 8080:3000 duda-site:local
# abra http://localhost:8080
```

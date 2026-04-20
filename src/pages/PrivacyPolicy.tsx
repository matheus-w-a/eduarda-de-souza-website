import { useEffect } from "react";
import { Link } from "react-router";
import { Container } from "@/components/ui/Container";
import { site } from "@/constants/site";

const lastUpdate = "19 de abril de 2026";

export function PrivacyPolicy() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `Política de Privacidade · ${site.name}`;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-sand-100">
      <header className="border-b border-terracotta-500/10 bg-sand-100/85 backdrop-blur">
        <Container className="flex items-center justify-between py-5 md:py-6">
          <Link
            to="/"
            className="font-display text-lg tracking-tight text-terracotta-500 md:text-xl"
          >
            {site.name}
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-terracotta-500"
          >
            ← Voltar ao início
          </Link>
        </Container>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <Container size="narrow">
          <article className="space-y-10">
            <header className="space-y-5">
              <span className="eyebrow">Documento legal</span>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tightest text-terracotta-500 md:text-5xl">
                Política de Privacidade
              </h1>
              <p className="text-sm text-ink-muted">
                Última atualização: {lastUpdate}
              </p>
              <span className="divider" aria-hidden="true" />
            </header>

            <Section title="1. Introdução">
              <p>
                Esta Política de Privacidade descreve como os dados dos usuários
                são tratados no âmbito da aplicação administrativa utilizada por{" "}
                <strong>{site.name}</strong> ({site.role}) e sua equipe para
                gestão de atendimentos e agendamentos. Ao utilizar a aplicação,
                o usuário declara ciência e concordância com os termos descritos
                a seguir.
              </p>
              <p>
                O tratamento de dados realizado é limitado ao estritamente
                necessário para o funcionamento da aplicação e para a prestação
                do serviço, em conformidade com a Lei Geral de Proteção de Dados
                (Lei nº 13.709/2018 — LGPD).
              </p>
            </Section>

            <Section title="2. Dados coletados">
              <p>
                A aplicação pode coletar e tratar os seguintes dados:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Dados de autenticação do Google:</strong> nome,
                  endereço de e-mail, foto de perfil e identificador único da
                  conta Google, obtidos por meio do fluxo de autenticação OAuth
                  2.0.
                </li>
                <li>
                  <strong>Dados do Google Agenda (Calendar):</strong> eventos,
                  datas, horários, títulos e descrições criados pela própria
                  aplicação, acessados exclusivamente com autorização prévia e
                  explícita do usuário. A aplicação não convida participantes
                  nem lê dados de terceiros.
                </li>
                <li>
                  <strong>Dados de uso:</strong> registros técnicos de acesso
                  (logs) como data, horário e tipo de operação realizada, para
                  fins de segurança e auditoria.
                </li>
              </ul>
            </Section>

            <Section title="3. Finalidade do tratamento">
              <p>
                Os dados coletados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Autenticar o usuário administrador no sistema.
                </li>
                <li>
                  Consultar, criar, atualizar e remover eventos no Google
                  Agenda, de forma a manter a sincronização entre a aplicação
                  administrativa e a agenda da profissional.
                </li>
                <li>
                  Garantir a integridade, segurança e correto funcionamento da
                  aplicação.
                </li>
              </ul>
              <p>
                Os dados <strong>não são utilizados</strong> para fins
                publicitários, treinamento de modelos de inteligência artificial
                ou qualquer outra finalidade não descrita nesta política.
              </p>
            </Section>

            <Section title="4. Uso de APIs do Google">
              <p>
                Esta aplicação utiliza as APIs do Google, incluindo a Google
                Calendar API. O uso e a transferência de informações recebidas
                dessas APIs estão sujeitos à{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-terracotta-500 underline-offset-4 hover:underline"
                >
                  Google API Services User Data Policy
                </a>
                , incluindo os requisitos de uso limitado (Limited Use).
              </p>
              <p>
                O acesso a dados da conta Google é solicitado mediante
                consentimento explícito do usuário através do fluxo de
                autorização OAuth 2.0, e pode ser revogado a qualquer momento em{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-terracotta-500 underline-offset-4 hover:underline"
                >
                  myaccount.google.com/permissions
                </a>
                .
              </p>
            </Section>

            <Section title="5. Compartilhamento de dados">
              <p>
                Os dados tratados <strong>não são vendidos, alugados ou
                compartilhados</strong> com terceiros para fins comerciais.
                Eventual compartilhamento ocorrerá apenas:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Com provedores de infraestrutura técnica necessários à
                  operação da aplicação (por exemplo, servidores de hospedagem),
                  sob obrigações contratuais de confidencialidade.
                </li>
                <li>
                  Mediante determinação legal, judicial ou de autoridade
                  competente.
                </li>
              </ul>
            </Section>

            <Section title="6. Armazenamento e segurança">
              <p>
                Os dados são armazenados em servidores seguros, com medidas
                técnicas e administrativas razoáveis para protegê-los contra
                acessos não autorizados, perda, alteração ou destruição.
              </p>
              <p>
                Os tokens de acesso do Google são mantidos criptografados e
                utilizados exclusivamente para as finalidades descritas nesta
                política.
              </p>
            </Section>

            <Section title="7. Retenção e exclusão">
              <p>
                Os dados são mantidos pelo tempo necessário ao cumprimento das
                finalidades descritas ou enquanto perdurar a relação de uso da
                aplicação. O usuário pode solicitar a exclusão de seus dados a
                qualquer momento, por meio dos canais de contato informados
                abaixo.
              </p>
              <p>
                Também é possível revogar o acesso da aplicação à conta Google
                diretamente pelo painel de permissões do Google, o que cessa o
                acesso a novos dados.
              </p>
            </Section>

            <Section title="8. Direitos do titular (LGPD)">
              <p>
                Em conformidade com a LGPD, o titular dos dados pode, a qualquer
                momento, solicitar:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados tratados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade a outro fornecedor de serviço;</li>
                <li>Revogação do consentimento anteriormente fornecido.</li>
              </ul>
            </Section>

            <Section title="9. Cookies">
              <p>
                A aplicação pode utilizar cookies técnicos estritamente
                necessários ao seu funcionamento, como cookies de sessão para
                manter o usuário autenticado. Nenhum cookie de publicidade ou
                rastreamento de terceiros é utilizado.
              </p>
            </Section>

            <Section title="10. Alterações desta política">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente
                para refletir mudanças legais, técnicas ou operacionais. A data
                da última atualização estará sempre indicada no topo deste
                documento. Recomenda-se consulta regular a esta página.
              </p>
            </Section>

            <Section title="11. Contato">
              <p>
                Dúvidas, solicitações ou exercício de direitos relacionados a
                esta Política de Privacidade podem ser encaminhados por meio dos
                seguintes canais:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  E-mail:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-terracotta-500 underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
                <li>Responsável: {site.name} — {site.role}</li>
              </ul>
            </Section>

            <footer className="border-t border-terracotta-500/10 pt-8">
              <p className="text-sm italic text-ink-muted">
                Este documento foi elaborado em caráter informativo. Para
                adequação integral ao contexto específico da aplicação e aos
                requisitos do Google para publicação, recomenda-se revisão
                jurídica.
              </p>
            </footer>
          </article>
        </Container>
      </main>

      <footer className="border-t border-terracotta-500/10 bg-sand-100 py-8">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <Link
            to="/"
            className="transition-colors hover:text-terracotta-500"
          >
            {site.name.toLowerCase().replace(/\s/g, "")}
          </Link>
        </Container>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl leading-tight text-terracotta-500 md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

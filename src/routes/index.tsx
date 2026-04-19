import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    // Página não-listada na navegação. Acessível apenas via URL direta —
    // usada para verificação de OAuth do Google Cloud.
    path: "/politica-de-privacidade",
    element: <PrivacyPolicy />,
  },
]);

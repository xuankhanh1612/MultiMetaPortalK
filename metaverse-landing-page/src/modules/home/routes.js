import HomePage from "./pages/HomePage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermConditionsPage from "./pages/TermConditionsPage";
import CopyrightInformationPage from "./pages/CopyrightInformationPage";
import LicenseAgreementPage from "./pages/LicenseAgreementPage";

export const homeRoute = [
  {
    path: "/",
    component: HomePage,
    noAppLayout: true,
    unauthenticated: true,
  },
  {
    path: "/privacy",
    component: PrivacyPolicyPage,
    noAppLayout: true,
    unauthenticated: true,
  },
  {
    path: "/cookie",
    component: CookiesPolicyPage,
    noAppLayout: true,
    unauthenticated: true,
  },
  {
    path: "/term",
    component: TermConditionsPage,
    noAppLayout: true,
    unauthenticated: true,
  },
  {
    path: "/copy-right",
    component: CopyrightInformationPage,
    noAppLayout: true,
    unauthenticated: true,
  },
  {
    path: "/license",
    component: LicenseAgreementPage,
    noAppLayout: true,
    unauthenticated: true,
  },
];

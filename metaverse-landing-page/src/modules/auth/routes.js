import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export const authRoute = [
  {
    path: "/login",
    component: LoginPage,
    noAppLayout: true,
    unauthenticated: true,
  },
  {
    path: "/signup",
    component: SignupPage,
    noAppLayout: true,
    unauthenticated: true,
  },
];

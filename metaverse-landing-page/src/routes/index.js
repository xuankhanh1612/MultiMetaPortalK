import { authRoute } from "../modules/auth";
import { homeRoute } from "../modules/home";
import { metaRoute } from "../modules/meta";
import { settingsRoute } from "../modules/settings";

import { ComingSoon } from "../modules/base/components/ComingSoon";
export const routes = [
  ...authRoute,
  ...homeRoute,
  ...metaRoute,
  ...settingsRoute,

  {
    path: "*",
    component: ComingSoon,
    unauthenticated: true,
  },
];

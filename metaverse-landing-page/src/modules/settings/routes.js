import SettingMediaListPage from "./pages/SettingMediaListPage";
import SettingMediaCreatePage from "./pages/SettingMediaCreatePage";
import SettingMetaDomainPage from "./pages/SettingMetaDomainPage";
import SettingMetaPage from "./pages/SettingMetaPage";
import SettingProfilePage from "./pages/SettingProfilePage";
import SettingShopPage from "./pages/SettingShopPage";

export const settingsRoute = [
  {
    path: "/setting/metaDomain",
    component: SettingMetaDomainPage,
  },
  {
    path: "/setting/metaSetting",
    component: SettingMetaPage,
  },
  {
    path: "/setting/shop",
    component: SettingShopPage,
  },
  {
    path: "/setting/profile",
    component: SettingProfilePage,
  },
  {
    path: "/setting/:typeName/create",
    component: SettingMediaCreatePage,
  },
  {
    path: "/setting/:typeName",
    component: SettingMediaListPage,
  },
];

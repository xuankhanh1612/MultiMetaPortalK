import React, { Suspense } from "react";
const SettingShopWrapper = React.lazy(() =>
  import("../components/SettingShopWrapper")
);
const SettingShopPage = () => {
  return (
    <Suspense fallback={<></>}>
      <SettingShopWrapper />
    </Suspense>
  );
};

export default SettingShopPage;

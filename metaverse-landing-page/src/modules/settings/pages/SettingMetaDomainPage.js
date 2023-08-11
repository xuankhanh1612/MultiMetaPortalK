import React, { Suspense } from "react";
const SettingMetaDomainWrapper = React.lazy(() =>
  import("../components/SettingMetaDomainWrapper")
);
const SettingMetaDomainPage = () => {
  return (
    <Suspense fallback={<></>}>
      <SettingMetaDomainWrapper />
    </Suspense>
  );
};

export default SettingMetaDomainPage;

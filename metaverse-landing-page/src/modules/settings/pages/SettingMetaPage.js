import React, { Suspense } from "react";
const SettingMetaWrapper = React.lazy(() =>
  import("../components/SettingMetaWrapper")
);
const SettingMetaPage = () => {
  return (
    <Suspense fallback={<></>}>
      <SettingMetaWrapper />
    </Suspense>
  );
};

export default SettingMetaPage;

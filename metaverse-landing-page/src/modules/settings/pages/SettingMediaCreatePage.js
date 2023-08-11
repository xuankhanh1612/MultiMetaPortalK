import React, { Suspense } from "react";
const SettingMediaCreateWrapper = React.lazy(() =>
  import("../components/SettingMediaCreateWrapper")
);
const SettingMediaCreatePage = () => {
  return (
    <Suspense fallback={<></>}>
      <SettingMediaCreateWrapper />
    </Suspense>
  );
};

export default SettingMediaCreatePage;

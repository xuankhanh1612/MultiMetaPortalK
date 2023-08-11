import React, { Suspense } from "react";
const SettingMediaListWrapper = React.lazy(() =>
  import("../components/SettingMediaListWrapper")
);
const SettingMediaListPage = () => {
  return (
    <Suspense fallback={<></>}>
      <SettingMediaListWrapper />
    </Suspense>
  );
};

export default SettingMediaListPage;

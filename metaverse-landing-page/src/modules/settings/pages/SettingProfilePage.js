import React, { Suspense } from "react";
const SettingProfileWrapper = React.lazy(() =>
  import("../components/SettingProfileWrapper")
);
const SettingProfilePage = () => {
  return (
    <Suspense fallback={<></>}>
      <SettingProfileWrapper />
    </Suspense>
  );
};

export default SettingProfilePage;

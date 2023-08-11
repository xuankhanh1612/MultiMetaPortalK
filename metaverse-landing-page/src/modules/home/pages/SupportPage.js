import React, { Suspense } from "react";
const SupportWrapper = React.lazy(() => import("../components/SupportWrapper"));
const SupportPage = () => {
  return (
    <Suspense fallback={<></>}>
      <SupportWrapper />
    </Suspense>
  );
};

export default SupportPage;

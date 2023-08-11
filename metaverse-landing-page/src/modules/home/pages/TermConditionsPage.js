import React, { Suspense } from "react";
const TermConditionsWrapper = React.lazy(() => import("../components/TermConditionsWrapper"));
const PrivacyPolicy = () => {
  return (
    <Suspense fallback={<></>}>
      <TermConditionsWrapper />
    </Suspense>
  );
};

export default PrivacyPolicy;

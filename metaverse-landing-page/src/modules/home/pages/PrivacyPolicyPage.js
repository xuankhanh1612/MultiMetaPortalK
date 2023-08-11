import React, { Suspense } from "react";
const PrivacyPolicyWrapper = React.lazy(() =>
  import("../components/PrivacyPolicyWrapper")
);
const PrivacyPolicy = () => {
  return (
    <Suspense fallback={<></>}>
      <PrivacyPolicyWrapper />
    </Suspense>
  );
};

export default PrivacyPolicy;

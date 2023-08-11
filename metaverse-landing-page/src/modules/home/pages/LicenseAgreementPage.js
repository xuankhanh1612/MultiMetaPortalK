import React, { Suspense } from "react";
const LicenseAgreementWrapper = React.lazy(() => import("../components/LicenseAgreementWrapper"));
const LicenseAgreementPage = () => {
  return (
    <Suspense fallback={<></>}>
      <LicenseAgreementWrapper />
    </Suspense>
  );
};

export default LicenseAgreementPage;

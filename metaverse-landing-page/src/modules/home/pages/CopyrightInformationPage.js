import React, { Suspense } from "react";
const CopyrightInformationWrapper = React.lazy(() => import("../components/CopyrightInformationWrapper"));

const CopyrightInformation = () => {
  return (
    <Suspense fallback={<></>}>
      <CopyrightInformationWrapper />
    </Suspense>
  );
};

export default CopyrightInformation;

import React, { Suspense } from "react";
const CookiesPolicyWrapper = React.lazy(() => import("../components/CookiesPolicyWrapper"));
const CookiesPolicyPage = () => {
  return (
    <Suspense fallback={<></>}>
      <CookiesPolicyWrapper />
    </Suspense>
  );
};

export default CookiesPolicyPage;

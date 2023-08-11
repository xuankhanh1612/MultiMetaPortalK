import React, { Suspense, useEffect } from "react";
const SignupPageWrapper = React.lazy(() =>
  import("../components/SignupPageWrapper")
);
const SignupPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Suspense fallback={<></>}>
      <SignupPageWrapper />
    </Suspense>
  );
};

export default SignupPage;

import React, { Suspense, useEffect } from "react";
const LoginPageWrapper = React.lazy(() =>
  import("../components/LoginPageWrapper")
);
const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Suspense fallback={<></>}>
      <LoginPageWrapper />
    </Suspense>
  );
};

export default LoginPage;

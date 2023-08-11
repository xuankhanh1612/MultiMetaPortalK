import React, { Suspense } from "react";
const HomeWrapper = React.lazy(() => import("../components/HomeWrapper"));
const HomePage = () => {
  return (
    <Suspense fallback={<></>}>
      <HomeWrapper />
    </Suspense>
  );
};

export default HomePage;

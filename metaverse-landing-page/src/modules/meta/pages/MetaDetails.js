import React, { Suspense } from "react";
const MetaDetailsWrapper = React.lazy(() =>
  import("../components/MetaDetailsWrapper")
);
const MetaDetails = () => {
  return (
    <Suspense fallback={<></>}>
      <MetaDetailsWrapper />
    </Suspense>
  );
};

export default MetaDetails;

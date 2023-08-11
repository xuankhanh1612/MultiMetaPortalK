import React, { Suspense } from "react";
const ContactWrapper = React.lazy(() => import("../components/ContactWrapper"));
const ContactPage = () => {
  return (
    <Suspense fallback={<></>}>
      <ContactWrapper />
    </Suspense>
  );
};

export default ContactPage;

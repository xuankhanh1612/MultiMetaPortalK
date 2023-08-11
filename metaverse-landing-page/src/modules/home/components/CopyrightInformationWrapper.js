import React from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";

const CopyrightInformationWrapper = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 py-8 leading-normal">
        <div className="container">
          This website and its content is copyright of Multimeta. All rights
          reserved.
          <br />
          Any redistribution or reproduction of part or all of the contents in
          any form is prohibited other than the following:
          <br />
          - You may print or download to a local hard disk extracts for your
          personal and non-commercial use only.
          <br />
          - You may copy the content to individual third parties for their
          personal use, but only if you acknowledge the website as the source of
          the material.
          <br />- You may not, except with our express written permission,
          distribute or commercially exploit the content. Nor may you transmit
          it or store it in any other website or other form of electronic
          retrieval system.
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default React.memo(CopyrightInformationWrapper);

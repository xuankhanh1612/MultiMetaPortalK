import React from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";

const SupportWrapper = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 py-8 leading-normal">
        <div className="container">
          <div>
            <strong>Address:</strong> 470 North Bridge Road #05-12 Bugis Cube,
            Singapore
          </div>
          <div>
            <strong>Hotline:</strong> 0988712717
          </div>
          <div>Technical Support</div>
          <div>
            <strong>Email:</strong> support@multimeta.one
          </div>
          <div>Sales Support</div>
          <div>
            <strong>Email:</strong> sales@multimeta.one
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default React.memo(SupportWrapper);

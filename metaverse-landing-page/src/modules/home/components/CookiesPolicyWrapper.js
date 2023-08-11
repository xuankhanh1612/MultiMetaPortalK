import React from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";

const CookiesPolicyWrapper = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 py-8 leading-normal">
        <div className="container">
          Multimeta ("us", "we", or "our") understand that your privacy is
          important to you and are committed to being transparent about the
          technologies it uses. This Cookie Policy ("Cookie Policy") explains
          how and why cookies ( "Cookies") may be stored on and accessed from
          your device when you use or visit any website or app that posts a link
          to this Policy (collectively, our "Sites"). Please read this Cookie
          Policy carefully before using our Site.
          <br />
          By clicking "Accept" on the Cookie banner, you give us your consent to
          store and access Cookies and Other Tracking Technologies as described
          in this Cookie Policy.
          <br />
          What are Cookies?
          <br />
          Cookies are small text files, often including unique identifiers, that
          are sent by web servers to web browsers, and which may then be sent
          back to the server each time the browser requests a page from the
          server.
          <br />
          Cookies are very useful and enable an internet site to recognize you,
          log when you visit a particular page, provide a secure connection to a
          website and enhance your user experience by: improving your browsing
          comfort, and/ or adapting the content of a page to your areas of
          interest.
          <br />
          How does our Site use Cookies?
          <br />
          We may use information collected from our Cookies to identify user
          behavior and to serve content and offers based on your profile, and in
          order to enhance the convenience of the users of our Site.
          <br />
          Information on the Types of Cookies that are used on our Site
          <br />
          We have provided details of the types of Cookies that are used on our
          Site as well as other relevant and useful information on the Cookies.
          You can also find more information on the Cookies when you click the
          pop-up window "[name of the pop-up banner]".
          <br />
          -Technical Cookies:
          <br />
          These Cookies are necessary to enable you to move around our Site and
          use its features. These Cookies also allow our Site to remember your
          previous action within the same browsing session.
          <br />
          -Analytical Cookies:
          <br />
          These Cookies are used by us or third-party service providers to
          analyze how our Sites are used and how they are performing.
          <br />
          -Functionality Cookies:
          <br />
          These Cookies allow our Site to remember choices you make when you
          visit our Site in order to provide enhanced, more personalized
          features to you. The types of information collected by Functionality
          Cookies are, language preference, and the region you are located in.
          <br />
          -Advertising and Retargeting Cookies:
          <br />
          These Cookies save information from your browsing history in order to
          record your interests and your browsing path on our Site. We may use
          advertising and targeting cookies for retargeting, which enables our
          advertising partners to target advertising to you on other websites,
          based on your visit to our Site. Without these Cookies, online
          advertisements you encounter will be less relevant to you and your
          interests.
          <br />
          How do I refuse or withdraw my consent to the use of cookies?
          <br />
          If you do not want Cookies to be placed on your device, we suggest you
          to set your preferences regarding Cookies. By clicking "Cookie
          Preferences" on the bottom of each webpage, you can select the types
          of Cookies our Site uses. You can change your preferences at any time;
          you can also withdraw the consent you have previously given to us.
          <br />
          If you wish to remove previously-stored Cookies, you can manually
          delete the Cookies at any time. However, this will not prevent our
          Site from placing further Cookies on your device unless and until you
          adjust your "Cookie Preferences" choice as described above.
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default React.memo(CookiesPolicyWrapper);

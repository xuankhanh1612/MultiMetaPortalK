import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import SidebarMenu from "./SidebarMenu";

const AppLayout = ({ setContent, children }) => {
  const website = useSelector((state) => state.caches.website);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{website?.site_name}</title>
        <link rel="canonical" href={window.location.origin} />
        <meta property="og:title" content={website?.site_name} />
        <meta property="og:site_name" content={website?.site_name} />
        <meta property="og:description" content={website?.site_description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="app pt-10 bg-primary">
        <div className="app-header">
          <Header solidBackground />
        </div>
        <div className="app-container h-full bg-primary container flex item-center justify-between">
          <div className="app-left-menu w-64">
            <SidebarMenu />
          </div>
          <div className="app-content h-screen w-full">{children}</div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default AppLayout;

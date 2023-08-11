import React from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import MetaList from "../../meta/components/MetaList";
import MetaDesign from "../../meta/components/MetaDesign";
import HomeHero from "./HomeHero";

const HomeWrapper = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <MetaList />
      <MetaDesign />
      <Footer />
    </div>
  );
};
export default React.memo(HomeWrapper);

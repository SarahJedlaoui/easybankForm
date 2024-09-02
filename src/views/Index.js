import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";
// sections for this page
import Images from "./index-sections/Images.js";
import Tabs from "./index-sections/Tabs.js";



function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <Images />
          <Tabs />
         
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;

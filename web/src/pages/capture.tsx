// Capture page
// ___________________________________________________________________

// Libraries
import React from "react";

// Components
import SEO from "../components/SEO";
import CapturePage from "../views/CapturePage";

// ___________________________________________________________________

const Capture = () => {
  return (
    <>
      <SEO
        pathname={`/capture`}
        title={`TITLE | Orthopaedic Implant Co.`}
        desc={`DESCRIPTION`}
        // banner={page.billboard.figure.asset.url}
        individual={true}
      />
      <CapturePage />
    </>
  );
};

export default Capture;

// Capture page

// ___________________________________________________________________

// Libraries
import React from "react";

// Components
import SEO from "../components/SEO";
import CapturePage from "../views/CapturePage";

// Hooks
import useContactPage from "../hooks/useContactPage";

// ___________________________________________________________________

const Capture = () => {
  const page = useContactPage();
  return (
    <>
      <SEO
        pathname={`/contact`}
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

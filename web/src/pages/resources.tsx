// Resources page

// ___________________________________________________________________

// Libraries
import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import IfuPage from "../views/ResourcesPage";

// ___________________________________________________________________

const Resources = () => {
  return (
    <Layout>
      <SEO
        pathname={`/resources`}
        title={`Resources | Orthopaedic Implant Co.`}
        individual={true}
      />
      <IfuPage />
    </Layout>
  );
};

export default Resources;

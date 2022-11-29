// Terms page

// ___________________________________________________________________

// Libraries
import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TermsPage from "../views/TermsPage";

// Hooks
import useTerms from "../hooks/useTerms";

// ___________________________________________________________________

const Terms = () => {
  const page = useTerms();
  return (
    <>
      <SEO pathname="/terms" title={page.pageTitle.message} individual={true} />
      <TermsPage />
    </>
  );
};

export default Terms;

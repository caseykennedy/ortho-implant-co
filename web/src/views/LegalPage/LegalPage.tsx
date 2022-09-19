// LegalPage:

// ___________________________________________________________________

import React from "react";

import PageTitle from "../../components/PageTitle";
import Billboard from "../../components/Billboard";
import Section from "../../components/Section";
import BlockContent from "../../components/BlockContent";

// Hooks
import useLegal from "../../hooks/useLegal";

import * as S from "./styles.scss";
import theme from "../../../config/theme";

// ___________________________________________________________________

const LegalPage = () => {
  const page = useLegal();
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.gatsbyImageData,
    message: page.pageTitle.message,
    title: page.pageTitle.title,
  };
  const billboardProps = {
    bg: theme.colors.tertiary,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.gatsbyImageData,
    altText: page.billboard.figure.alt,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo,
  };
  return (
    <S.LegalPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
      </Section>

      <Billboard {...billboardProps} />
    </S.LegalPage>
  );
};

export default LegalPage;

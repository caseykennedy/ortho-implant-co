// Intro Section:

// ___________________________________________________________________

import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import useAboutPage from "../../../hooks/useAboutPage";

// Components
import Accordion from "../../../components/Accordion";
import BlockContent from "../../../components/BlockContent";

// UI
import { Box, Heading } from "../../../elements";

// Theme
import * as S from "./styles.scss";
import theme from "../../../../config/theme";

// ___________________________________________________________________

type PageShape = {
  item: {
    _rawBody: string;
    lead: string;
    title: string;
  };
};

const Position = ({ item }: PageShape) => {
  const AccordionProps = {
    chevronColor: theme.colors.secondary,
    color: theme.colors.secondary,
    colorActive: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    bg: "transparent",
    pt: [5, 6],
    pb: [5, 6],
    pr: [5],
    pl: [5, 7],
  };
  return (
    // @ts-ignore: Unreachable code error
    <Accordion title={item.title} {...AccordionProps}>
      <Box bg="background" color="text" pt={6} p={[5, 7]}>
        {item._rawBody && <BlockContent blocks={item._rawBody || []} />}
      </Box>
    </Accordion>
  );
};

const Intro = () => {
  const page = useAboutPage();

  return (
    <S.Intro>
      <S.About width={[1, 8 / 10, 2 / 3]}>
        <Box bg="primary" mt={[0]}>
          <Box p={theme.gutter.axis} bg="secondary" color="white">
            <Heading as="h5" color="primary">
              {page.intro.title && page.intro.title}
            </Heading>

            <Heading as="h2" fontSize={3}>
              {page.intro.heading && page.intro.heading}
            </Heading>

            <Box mt={12}>
              {page.intro._rawBody && (
                <BlockContent blocks={page.intro._rawBody || []} />
              )}
            </Box>
          </Box>

          {page.intro.positioning.map((item, idx) => (
            <Position key={idx} item={item} />
          ))}
        </Box>
      </S.About>
    </S.Intro>
  );
};

export default Intro;

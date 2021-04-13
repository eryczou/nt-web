import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  UpperSection,
  FeatureTypographyWrapper,
  FeatureSubTypographyWrapper,
  LowerSection,
  FontAwesomeIconWrapper,
  TypographyH6Wrapper,
  TypographyBodyWrapper,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCode } from "@fortawesome/free-solid-svg-icons";

export const FirstFeatureSection = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={12} spacing={4}>
        <Grid container justify="center">
          <UpperSection item xs={8} xl={5} data-aos="fade-up">
            <FeatureTypographyWrapper variant="h2">
              Build accessible React apps with speed
            </FeatureTypographyWrapper>
            <FeatureSubTypographyWrapper variant="h6">
              Build a beautiful, modern website with flexible, fully
              customizable, atomic Material UI components.
            </FeatureSubTypographyWrapper>
          </UpperSection>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <LowerSection item xs={12} xl={8} data-aos="fade-up">
            <Grid container justify="center" spacing={4}>
              <Grid item xs={4} xl={4}>
                <FontAwesomeIconWrapper>
                  <FontAwesomeIcon icon={faLayerGroup} />
                </FontAwesomeIconWrapper>
                <TypographyH6Wrapper variant="h6" color="textPrimary">
                  Built for developers
                </TypographyH6Wrapper>
                <TypographyBodyWrapper variant="body1">
                  TheFront is built to make your life easier. Variables, build
                  tooling, documentation, and reusable components.
                </TypographyBodyWrapper>
              </Grid>
              <Grid item xs={4} xl={4}>
                <FontAwesomeIconWrapper>
                  <FontAwesomeIcon icon={faLayerGroup} />
                </FontAwesomeIconWrapper>
                <TypographyH6Wrapper variant="h6" color="textPrimary">
                  Designed to be modern
                </TypographyH6Wrapper>
                <TypographyBodyWrapper variant="body1">
                  Designed with the latest design trends in mind. TheFront feels
                  modern, minimal, and beautiful.
                </TypographyBodyWrapper>
              </Grid>
              <Grid item xs={4} xl={4}>
                <FontAwesomeIconWrapper>
                  <FontAwesomeIcon icon={faCode} />
                </FontAwesomeIconWrapper>
                <TypographyH6Wrapper variant="h6" color="textPrimary">
                  Documentation for everything
                </TypographyH6Wrapper>
                <TypographyBodyWrapper variant="body1">
                  We've written extensive documentation for components and
                  tools, so you never have to reverse engineer anything.
                </TypographyBodyWrapper>
              </Grid>
            </Grid>
          </LowerSection>
        </Grid>
      </Grid>
    </Grid>
  );
};

import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  UpperSection,
  FeatureTypographyWrapper,
  FeatureSubTypographyWrapper,
  LowerSection,
} from "./styled";

export const FirstFeatureSection = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Grid container justify="center">
          <UpperSection item xs={8} xl={6}>
            <FeatureTypographyWrapper variant="h2">
              Build accessible React apps with speed
            </FeatureTypographyWrapper>
            <FeatureSubTypographyWrapper variant="h6">
              Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components.
            </FeatureSubTypographyWrapper>
          </UpperSection>
        </Grid>
      </Grid>

      <LowerSection>test2</LowerSection>
    </Grid>
  );
};

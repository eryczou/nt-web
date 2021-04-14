import React from "react";
import {
  SecondFeatureWrapper,
  LeftPanelWrapper,
  RightPanelWrapper,
  H3TypographyWrapper,
  H6TypographyWrapper,
  ImageWrapper,
  ButtonsWrapper,
} from "./styled";
import { Grid, Button } from "@material-ui/core";
import planningImg from "../../../assets/img/planning.png";
import discussImg from "../../../assets/img/discuss.png";

export const SecondFeatureSection = () => {
  return (
    <SecondFeatureWrapper container direction="column" spacing={8}>
      <Grid item xs={12} xl={12}>
        <Grid container justify="center">
          <LeftPanelWrapper item md={6} lg={6} xl={4}>
            <H3TypographyWrapper variant="h3">
              Less code. More speed
            </H3TypographyWrapper>
            <H6TypographyWrapper>
              theFront is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.theFront is a simple, modular and accessible
              component library that gives you the building blocks you need to
              build your React applications.theFront is a simple, modular and
            </H6TypographyWrapper>
            <ButtonsWrapper container justify="left">
              <Button variant="contained" color="primary">
                Documentation
              </Button>
            </ButtonsWrapper>
          </LeftPanelWrapper>
          <RightPanelWrapper item md={6} lg={6} xl={4}>
            <ImageWrapper imgUrl={planningImg} />
          </RightPanelWrapper>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={12}>
        <Grid container justify="center">
          <LeftPanelWrapper item md={6} lg={6} xl={4}>
            <ImageWrapper imgUrl={discussImg} />
          </LeftPanelWrapper>
          <RightPanelWrapper item md={6} lg={6} xl={4}>
            <H3TypographyWrapper variant="h3">
              Less code. More speed
            </H3TypographyWrapper>
            <H6TypographyWrapper>
              theFront is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.theFront is a simple, modular and accessible
              component library that gives you the building blocks you need to
              build your React applications.theFront is a simple, modular and
            </H6TypographyWrapper>
            <ButtonsWrapper container justify="left">
              <Button variant="contained" color="primary">
                Documentation
              </Button>
            </ButtonsWrapper>
          </RightPanelWrapper>
        </Grid>
      </Grid>
    </SecondFeatureWrapper>
  );
};

import React from "react";
import {
  SecondFeatureWrapper,
  FeatureTypographyWrapper,
  FeatureSubTypographyWrapper,
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
    <SecondFeatureWrapper container>
      <Grid item xs={12} xl={12}>
        <Grid container justify="center">
          <Grid item xs={8} xl={5}>
            <FeatureTypographyWrapper variant="h4">
              完整的机器学习运维平台
            </FeatureTypographyWrapper>
            <FeatureSubTypographyWrapper variant="subtitle1">
              为数据科学团队提供完整的模型运维解决方案
            </FeatureSubTypographyWrapper>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <LeftPanelWrapper
            item
            xs={10}
            lg={5}
            xl={4}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
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
          <RightPanelWrapper item xs={10} lg={5} xl={4} data-aos="fade-left">
            <ImageWrapper imgUrl={planningImg} />
          </RightPanelWrapper>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={12}>
        <Grid container justify="center">
          <LeftPanelWrapper item xs={10} lg={5} xl={4} data-aos="fade-right">
            <ImageWrapper imgUrl={discussImg} />
          </LeftPanelWrapper>
          <RightPanelWrapper item xs={10} lg={5} xl={4} data-aos="fade-left">
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

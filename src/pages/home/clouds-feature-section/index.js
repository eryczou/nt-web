import React from "react";
import {
  CloudsFeatureWrapper,
  ImageWrapper,
  FeatureTypographyWrapper,
} from "./styled";
import { Grid } from "@material-ui/core";
import awsLogo from "../../../assets/img/clouds/AWS_logo_RGB.png";

export const CloudsFeatureSection = () => {
  return (
    <CloudsFeatureWrapper>
      <Grid container justify="center">
        <Grid item xs={7} xl={5} style={{ background: "green" }}>
          <FeatureTypographyWrapper variant="h6">
            最熟悉的开发环境
          </FeatureTypographyWrapper>
          <Grid container justify="center">
            <ImageWrapper src={awsLogo}></ImageWrapper>
            <ImageWrapper src={awsLogo}></ImageWrapper>
            <ImageWrapper src={awsLogo}></ImageWrapper>
            <ImageWrapper src={awsLogo}></ImageWrapper>
            <ImageWrapper src={awsLogo}></ImageWrapper>
          </Grid>
        </Grid>
        <Grid item xs={5} xl={4} style={{ background: "red" }}>
          <FeatureTypographyWrapper variant="h6">
            部署公有或私有云
          </FeatureTypographyWrapper>
          <Grid container justify="center">
            <ImageWrapper src={awsLogo}></ImageWrapper>
            <ImageWrapper src={awsLogo}></ImageWrapper>
            <ImageWrapper src={awsLogo}></ImageWrapper>
          </Grid>
        </Grid>
      </Grid>
    </CloudsFeatureWrapper>
  );
};

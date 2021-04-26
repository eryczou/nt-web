import React from "react";
import {
  CloudsFeatureWrapper,
  TitleTypographyWrapper,
  ImageWrapper,
  FeatureTypographyWrapper,
} from "./styled";
import { Grid } from "@material-ui/core";

import jupyterLogo from "../../../assets/img/clouds/jupyter_logo.png";
import tensorflow from "../../../assets/img/clouds/tensorflow_logo.png";
import pytorch from "../../../assets/img/clouds/pytorch_logo.png";
import sklearn from "../../../assets/img/clouds/sklearn_logo.png";
import spacy from "../../../assets/img/clouds/spacy_logo.png";
import spark from "../../../assets/img/clouds/spark_logo.png";
import keras from "../../../assets/img/clouds/keras_logo.png";
import xgboost from "../../../assets/img/clouds/xgboost_logo.png";
import r from "../../../assets/img/clouds/r_logo.png";
import flask from "../../../assets/img/clouds/flask_logo.png";

import awsLogo from "../../../assets/img/clouds/aws_logo.png";
import tencentLogo from "../../../assets/img/clouds/tencent_logo.png";
import aliCloudLogo from "../../../assets/img/clouds/alicloud_logo.png";
import privateCloudLogo from "../../../assets/img/clouds/private_cloud_logo.png";

export const CloudsFeatureSection = () => {
  return (
    <CloudsFeatureWrapper>
      <Grid container justify="center">
        <Grid item xs={8} xl={5}>
          <TitleTypographyWrapper variant="h4">
            多样化的技术支持
          </TitleTypographyWrapper>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <Grid item xs={12} md={10} xl={10}>
          <FeatureTypographyWrapper variant="h6" marginbottom="20px">
            最熟悉的开发环境
          </FeatureTypographyWrapper>
          <Grid container justify="center" alignItems="center">
            <ImageWrapper src={jupyterLogo} height="70px"></ImageWrapper>
            <ImageWrapper src={tensorflow} height="70px"></ImageWrapper>
            <ImageWrapper src={pytorch} height="30px"></ImageWrapper>
            <ImageWrapper src={sklearn} height="50px"></ImageWrapper>
            <ImageWrapper src={spacy} height="40px"></ImageWrapper>
            <ImageWrapper src={spark} height="50px"></ImageWrapper>
            <ImageWrapper src={keras} height="50px"></ImageWrapper>
            <ImageWrapper src={xgboost} height="50px"></ImageWrapper>
            <ImageWrapper src={r} height="50px"></ImageWrapper>
            <ImageWrapper src={flask} height="45px"></ImageWrapper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} xl={10}>
          <FeatureTypographyWrapper
            variant="h6"
            margintop="40px"
            marginbottom="20px"
          >
            部署公有或私有云
          </FeatureTypographyWrapper>
          <Grid container justify="center" alignItems="center">
            <ImageWrapper src={awsLogo} height="40px"></ImageWrapper>
            <ImageWrapper src={tencentLogo} height="50px"></ImageWrapper>
            <ImageWrapper src={aliCloudLogo} height="40px"></ImageWrapper>
            <ImageWrapper src={privateCloudLogo} height="60px"></ImageWrapper>
          </Grid>
        </Grid>
      </Grid>
    </CloudsFeatureWrapper>
  );
};

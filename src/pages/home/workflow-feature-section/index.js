import React from "react";
import {
  WorkflowFeatureWrapper,
  FeatureTypographyWrapper,
  FeatureSubTypographyWrapper,
  LeftPanelWrapper,
  RightPanelWrapper,
  H3TypographyWrapper,
  H6TypographyWrapper,
  ImageWrapper,
} from "./styled";
import { Grid, Hidden } from "@material-ui/core";
import codingImg from "../../../assets/img/coding.png";
import deploymentImg from "../../../assets/img/deployment.png";
import performanceImg from "../../../assets/img/performance.png";
import versionImg from "../../../assets/img/version.png";

const data = [
  {
    leftContent: (
      <React.Fragment>
        <H3TypographyWrapper variant="h5">模型开发</H3TypographyWrapper>
        <H6TypographyWrapper>
          为数据科学团队提供最熟悉的开发环境和语言框架，减少基础设施平台搭建成本，让数据科学家更专注于模型开发，同时消除团队分工合作壁垒，节省模型开发时间。
        </H6TypographyWrapper>
      </React.Fragment>
    ),
    rightContent: (
      <Hidden xsDown>
        <ImageWrapper imgurl={codingImg}/>
      </Hidden>
    ),
  },
  {
    leftContent: (
      <Hidden xsDown>
        <ImageWrapper imgurl={versionImg}/>
      </Hidden>
    ),
    rightContent: (
      <React.Fragment>
        <H3TypographyWrapper variant="h5">版本控制</H3TypographyWrapper>
        <H6TypographyWrapper>
          对不同模型框架，如Sklearn，Tensorflow等提供模型备份功能，自定义数据库记录模型实验输出，规模化进行模型实验，并对模型源代码与模型结果进行版本控制。
        </H6TypographyWrapper>
      </React.Fragment>
    ),
  },
  {
    leftContent: (
      <React.Fragment>
        <H3TypographyWrapper variant="h5">模型部署</H3TypographyWrapper>
        <H6TypographyWrapper>
          消除繁琐的模型部署工作，统一已训练模型部署格式，一发布模型结果，支持公有云，私有云或on-premises部署，提供高效稳定模型API并整合到已有CI/CD流程。
        </H6TypographyWrapper>
      </React.Fragment>
    ),
    rightContent: (
      <Hidden xsDown>
        <ImageWrapper imgurl={deploymentImg}/>
      </Hidden>
    ),
  },
  {
    leftContent: (
      <Hidden xsDown>
        <ImageWrapper imgurl={performanceImg}/>
      </Hidden>
    ),
    rightContent: (
      <React.Fragment>
        <H3TypographyWrapper variant="h5">模型监控</H3TypographyWrapper>
        <H6TypographyWrapper>
          管理已发布模型的运行情况，对模型稳定性，模型预测结果，数据准确率，数据漂移等进行实时监控，提供可视化模型监控中控平台，汇总报告与模型运维日志。
        </H6TypographyWrapper>
      </React.Fragment>
    ),
  },
];

export const WorkflowFeatureSection = () => {
  return (
    <WorkflowFeatureWrapper container>
      <Grid item xs={12} xl={12}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} xl={5}>
            <FeatureTypographyWrapper variant="h4">
              完整的机器学习运维平台
            </FeatureTypographyWrapper>
            <FeatureSubTypographyWrapper variant="h6">
              为数据科学团队提供完整的模型运维解决方案
            </FeatureSubTypographyWrapper>
          </Grid>
        </Grid>
        <Grid item xs={12} xl={12}>
          {data.map((item) => {
            return (
              <Grid container justify="center">
                <LeftPanelWrapper
                  item
                  xs={10}
                  sm={6}
                  md={5}
                  lg={4}
                  xl={4}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  {item.leftContent}
                </LeftPanelWrapper>
                <RightPanelWrapper
                  item
                  xs={10}
                  sm={6}
                  md={5}
                  lg={4}
                  xl={4}
                  data-aos="fade-left"
                >
                  {item.rightContent}
                </RightPanelWrapper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </WorkflowFeatureWrapper>
  );
};

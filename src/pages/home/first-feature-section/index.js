import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  FirstFeatureWrapper,
  FeatureTypographyWrapper,
  FeatureSubTypographyWrapper,
  FontAwesomeIconWrapper,
  TypographyH6Wrapper,
  TypographyBodyWrapper,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCode,
  faServer,
  faTable,
  faCodeBranch,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    icon: <FontAwesomeIcon icon={faServer} />,
    title: "应景落地",
    content:
      "轻松部署模型到实际应用场景，并支持公有云，私有云或on-premises部署",
  },
  {
    icon: <FontAwesomeIcon icon={faTable} />,
    title: "模型拓展",
    content: "规模化模型开发实验，可重复利用模型结果与高效稳定模型运营环境",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "开发工具",
    content:
      "支持多种机器学习框架，提供任意版本Jupyter Notebook, RStudio等开发环境",
  },
  {
    icon: <FontAwesomeIcon icon={faBookOpen} />,
    title: "学习经典",
    content: "经典的机器学习和人工智能教程以及实战案例源代码下载",
  },
  {
    icon: <FontAwesomeIcon icon={faCodeBranch} />,
    title: "版本控制",
    content: "基于git的模型开发源代码版本控制，模型实验结果对比与版本控制",
  },
  {
    icon: <FontAwesomeIcon icon={faHandshake} />,
    title: "合作管理",
    content: "项目分工合作，协同开发，并对不同用户需求提供权限管理",
  },
];

export const FirstFeatureSection = () => {
  return (
    <FirstFeatureWrapper container>
      <Grid item xs={12} xl={12}>
        <Grid container justify="center">
          <Grid item xs={8} xl={5}>
            <FeatureTypographyWrapper variant="h4">
              赋能数据科学团队
            </FeatureTypographyWrapper>
            <FeatureSubTypographyWrapper variant="subtitle1">
              基于云技术打造的机器学习运维系统，为企业提供便捷高效的人工智能接口
            </FeatureSubTypographyWrapper>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Grid item xs={12} lg={8} xl={8}>
            <Grid container justify="center" spacing={4}>
              {data.map((item) => {
                return (
                  <Grid item xs={4} xl={4}>
                    <FontAwesomeIconWrapper>{item.icon}</FontAwesomeIconWrapper>
                    <TypographyH6Wrapper variant="h6">
                      {item.title}
                    </TypographyH6Wrapper>
                    <TypographyBodyWrapper variant="body1">
                      {item.content}
                    </TypographyBodyWrapper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FirstFeatureWrapper>
  );
};

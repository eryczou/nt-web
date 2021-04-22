import React from "react";
import {
  PricingFeatureWrapper,
  PricingTypographyWrapper,
  PricingSubTypographyWrapper,
  CardWrapper,
  CardContentWrapper,
  TypographyTitleWrapper,
  TypographySubTitleWrapper,
  ItemGridWrapper,
  TypographyItemWrapper,
  FontAwesomeIconWrapper,
  TalkButton,
} from "./styled";
import { Grid, CardActions, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const PricingFeatureSection = () => {
  return (
    <PricingFeatureWrapper>
      <Grid container justify="center">
        <Grid item xs={12} xl={5}>
          <PricingTypographyWrapper variant="h4">价格</PricingTypographyWrapper>
          <PricingSubTypographyWrapper variant="h6">
            不管您是准备开始探索数据模型的平台还是旨在把数据模型应用部署到生产环境中，我们都能为您提供解决方案
          </PricingSubTypographyWrapper>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={4}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Grid item xs={12} sm={6} lg={5} xl={4}>
          <CardWrapper>
            <CardContentWrapper>
              <TypographyTitleWrapper gutterBottom>
                开源版
              </TypographyTitleWrapper>
              <TypographySubTitleWrapper>
                免费，遵循Apache许可
              </TypographySubTitleWrapper>
              <Divider />
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  完整的模型开发和版本控制功能
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  基本开发框架(python)
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  有限的模型部署
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  社区技术支持
                </TypographyItemWrapper>
              </ItemGridWrapper>
            </CardContentWrapper>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} xl={4}>
          <CardWrapper>
            <CardContentWrapper>
              <TypographyTitleWrapper gutterBottom>
                企业版
              </TypographyTitleWrapper>
              <TypographySubTitleWrapper>
                安全托管，快速部署到生产环境
              </TypographySubTitleWrapper>
              <Divider />
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  完整的模型开发和版本控制功能
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  多语言(Python, R)，机器学习与深度学习框架
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  支持公有云，私有云或本地服务器部署
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  多用户分工合作，分享与权限管理
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  个性化的模型运维监控
                </TypographyItemWrapper>
              </ItemGridWrapper>
              <ItemGridWrapper
                container
                alignItems="center"
                justify="flex-start"
              >
                <FontAwesomeIconWrapper justify="center" alignItems="center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </FontAwesomeIconWrapper>
                <TypographyItemWrapper variant="h6">
                  专门技术支持团队, 7X24小时, 365天
                </TypographyItemWrapper>
              </ItemGridWrapper>
            </CardContentWrapper>
            <CardActions>
              <TalkButton variant="contained" size="medium" color="primary">
                联系我们
              </TalkButton>
            </CardActions>
          </CardWrapper>
        </Grid>
      </Grid>
    </PricingFeatureWrapper>
  );
};

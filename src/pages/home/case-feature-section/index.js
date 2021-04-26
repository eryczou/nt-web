import React from "react";
import {
  CaseFeatureWrapper,
  FeatureTypographyWrapper,
  CardWrapper,
  CardMediaWrapper,
  TypographyH6Wrapper,
  TypographyBodyWrapper,
} from "./styled";
import { Grid, CardContent } from "@material-ui/core";
import retail from "../../../assets/img/cases/retail.png";
import bank from "../../../assets/img/cases/bank.png";
import investment from "../../../assets/img/cases/investment.png";
import media from "../../../assets/img/cases/media.png";
import medical from "../../../assets/img/cases/medical.png";
import manufacturing from "../../../assets/img/cases/manufacturing.png";

const data = [
  {
    imgEle: <CardMediaWrapper image={retail} />,
    title: "零售",
    content:
      "运用机器学习实时分析消费者行为，建立订阅模型，预测流失客户；消费者归类模型，更好了解客服群体；消费推荐模型，精准广告投放。",
  },
  {
    imgEle: <CardMediaWrapper image={investment} />,
    title: "投资",
    content:
      "建立算法交易模型，并用历史数据预测市场交易机会；投资组合自动化风险管理，建立最优化模型。",
  },
  {
    imgEle: <CardMediaWrapper image={bank} />,
    title: "银行",
    content:
      "运用历史记录对存款客户建立信用评级模型；银行客户线上服务自动回复系统；建立反欺诈反洗钱模型，预测和预防消费交易异常行为。",
  },
  {
    imgEle: <CardMediaWrapper image={manufacturing} />,
    title: "制造",
    content:
      "生产数据实时监控，提高生产效率；自动化生产报错系统，预测机器故障；建立机器学习模型预测供求趋势，优化存货量。",
  },
  {
    imgEle: <CardMediaWrapper image={media} />,
    title: "媒体",
    content:
      "自然语言处理，分析社交媒体评论，文本情感分析，实时新闻动态分析；自动化文档分类，文案总结；命名实体识别。",
  },
  {
    imgEle: <CardMediaWrapper image={medical} />,
    title: "医疗",
    content:
      "电子病历分析与管理，医疗设备数据分析，医疗图形图像处理与分析，提高会诊正确率。",
  },
];

export const CaseFeatureSection = () => {
  return (
    <CaseFeatureWrapper container>
      <Grid container justify="center">
        <Grid item xs={12} md={10} xl={8}>
          <Grid container justify="center">
            <Grid item xs={10} xl={5}>
              <FeatureTypographyWrapper variant="h4">
                行业解决方案
              </FeatureTypographyWrapper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            spacing={2}
          >
            {data.map((item) => {
              return (
                <Grid item xs={12} sm={4} md={4} lg={4} key={item.title} >
                  <CardWrapper data-aos="fade-up"
                  data-aos-duration="1000">
                    {item.imgEle}
                    <CardContent>
                      <TypographyH6Wrapper variant="h6" color="textPrimary">
                        {item.title}
                      </TypographyH6Wrapper>
                      <TypographyBodyWrapper variant="body1">
                        {item.content}
                      </TypographyBodyWrapper>
                    </CardContent>
                  </CardWrapper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </CaseFeatureWrapper>
  );
};

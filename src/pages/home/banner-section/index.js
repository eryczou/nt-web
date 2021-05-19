import React, { useState, useEffect } from "react";
import { Button, Grid, Hidden } from "@material-ui/core";
import poster from "../../../assets/img/face.png";
import {
  BannerWrapper,
  IntroLeft,
  IntroRight,
  IntroTypographyWrapper,
  SubIntroTypographyWrapper,
  TypistWrapper,
  BtnsWrapper,
} from "./styled";

export const BannerIntroSection = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <BannerWrapper >
      <Grid container justify="center" alignItems="center">
        <IntroLeft
          item
          xs={12}
          sm={7}
          md={7}
          lg={5}
          xl={4}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <IntroTypographyWrapper variant="h3">
            人工智能/机器学习
          </IntroTypographyWrapper>
          {count ? (
            <TypistWrapper avgTypingDelay={50} onTypingDone={() => setCount(0)}>
              <span>模型开发</span>
              <TypistWrapper.Backspace count={4} delay={1000} />
              <span>模型部署</span>
              <TypistWrapper.Backspace count={4} delay={1000} />
              <span>模型监控</span>
              <TypistWrapper.Backspace count={4} delay={1000} />
              <span>以及更多服务...</span>
              <TypistWrapper.Backspace count={9} delay={2000} />
            </TypistWrapper>
          ) : (
            " "
          )}
          <SubIntroTypographyWrapper variant="h6">
            帮助企业轻松部署机器学习模型到实际应用场景
          </SubIntroTypographyWrapper>
          <BtnsWrapper>
            <Button variant="outlined" size="large" color="primary">
              查看文档
            </Button>
          </BtnsWrapper>
        </IntroLeft>
        <Hidden xsDown>
          <IntroRight item sm={5} md={4} lg={5} xl={4}>
            <img src={poster} alt="" />
          </IntroRight>
        </Hidden>
      </Grid>
    </BannerWrapper>
  );
};

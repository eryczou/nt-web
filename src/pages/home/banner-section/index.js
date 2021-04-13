import React, { useState, useEffect } from "react";
import { Button, Grid, Divider } from "@material-ui/core";
import {
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
    <React.Fragment>
      <Grid container justify="center">
        <IntroLeft item md={6} lg={6} xl={4} data-aos="fade-down">
          <IntroTypographyWrapper variant="h2">
            A modern design system for your new
          </IntroTypographyWrapper>
          {count ? (
            <TypistWrapper avgTypingDelay={50} onTypingDone={() => setCount(0)}>
              <span>development</span>
              <TypistWrapper.Backspace count={11} delay={800} />
              <span>deployment</span>
              <TypistWrapper.Backspace count={10} delay={800} />
              <span>monitoring</span>
              <TypistWrapper.Backspace count={10} delay={800} />
              <span>and many more...</span>
              <TypistWrapper.Backspace count={15} delay={1600} />
            </TypistWrapper>
          ) : (
            ""
          )}
          <SubIntroTypographyWrapper variant="h6">
            TheFront will make your product look modern and professional while
            saving you precious time.
          </SubIntroTypographyWrapper>
          <BtnsWrapper>
            <Button variant="outlined" size="large" color="primary">
              DOCUMENTATION
            </Button>
          </BtnsWrapper>
        </IntroLeft>
        <IntroRight item md={6} lg={6} xl={4} />
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

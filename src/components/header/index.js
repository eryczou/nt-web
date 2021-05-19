import React from "react";
import logoImage from "../../assets/img/logo.png";
import { Button, Grid } from "@material-ui/core";
import { HeaderWrapper, HeaderCenter, ContactUsBtn } from "./styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderCenter>
        <Grid  md={4}>
          <img src={logoImage} alt="" />
        </Grid>
        <Grid md={4}>
          <Button variant="outlined" color="primary">
            查看文档
          </Button>
          <ContactUsBtn
            variant="contained"
            color="primary"
          >
            联系我们
          </ContactUsBtn>
          </Grid>
      </HeaderCenter>
    </HeaderWrapper>
  );
};

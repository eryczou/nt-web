import React from "react";
import logoImage from "../../assets/img/logo.png";
import { Button, Grid } from "@material-ui/core";
import { HeaderWrapper, HeaderCenter, ContactUsBtn } from "./styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderCenter container alignItems="center" justify="space-between">
        <Grid item xs={12}
        sm={6}
        md={5}
        lg={5}
        xl={5}>
          <img src={logoImage} alt="" />
        </Grid>
        <Grid item xs={12}
          sm={6}
          md={5}
          lg={5}
          xl={5}>
          <div>
            <Button variant="outlined" color="primary">
              查看文档
            </Button>
            <ContactUsBtn variant="contained" color="primary">
              联系我们
            </ContactUsBtn>
          </div>
        </Grid>
      </HeaderCenter>
    </HeaderWrapper>
  );
};

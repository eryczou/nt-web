import React from "react";
import logoImage from "../../assets/img/logo.png";
import { Button, Grid } from "@material-ui/core";
import { HeaderWrapper, HeaderCenter, ContactUsBtn } from "./styled";

export const Header = () => {
  const handleDocumentClick = () => {
    const url = 'https://nantu-io.github.io/ntcore-doc/#/zh-cn/';
    window.open(url, '_blank');
  }

  const handleContactUs = () => {
    window.location.href = `mailto:info@nantutech.com`;
  }

  return (
    <HeaderWrapper>
      <HeaderCenter>
        <Grid md={4}>
          <img src={logoImage} alt="" />
        </Grid>
        <Grid md={4}>
          <Button variant="outlined" color="primary" onClick={handleDocumentClick}>
            查看文档
          </Button>
          <ContactUsBtn variant="contained" color="primary" onClick={handleContactUs}>
            联系我们
          </ContactUsBtn>
          </Grid>
      </HeaderCenter>
    </HeaderWrapper>
  );
};

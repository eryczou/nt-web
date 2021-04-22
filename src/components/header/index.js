import React from "react";
import logoImage from "../../assets/img/logo.png";
import { Button } from "@material-ui/core";
import { HeaderWrapper, HeaderCenter, ContactUsBtn } from "./styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderCenter>
        <img src={logoImage} alt="" />
        <div>
          <Button variant="outlined" color="primary">
            查看文档
          </Button>
          <ContactUsBtn
            variant="contained"
            color="primary"
          >
            联系我们
          </ContactUsBtn>
        </div>
      </HeaderCenter>
    </HeaderWrapper>
  );
};

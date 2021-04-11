import React from "react";
import logoImage from "../../assets/img/logo.svg";
import { Button, Divider } from "@material-ui/core";
import { HeaderWrapper, HeaderCenter, ContactUsBtn } from "./styled";

export const Header = () => {
  return (
    <React.Fragment>
      <HeaderWrapper>
        <HeaderCenter>
          <img src={logoImage} alt="" />
          <div>
            <Button variant="outlined">DOCUMENTATION</Button>
            <ContactUsBtn variant="contained" color="primary">
              Contact US
            </ContactUsBtn>
          </div>
        </HeaderCenter>
      </HeaderWrapper>
      <Divider />
    </React.Fragment>
  );
};

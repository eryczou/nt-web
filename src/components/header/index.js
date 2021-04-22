import React from "react";
import logoImage from "../../assets/img/logo.png";
import { Button } from "@material-ui/core";
import { HeaderWrapper, HeaderCenter, ContactUsBtn } from "./styled";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Header = () => {
  const matchesXs = useMediaQuery("(min-width:600px)");
  const padding = matchesXs ? "64px" : "8px";
  const margin = matchesXs ? "20px" : "5px";
  return (
    <HeaderWrapper>
      <HeaderCenter padding={padding}>
        <img src={logoImage} alt="" />
        <div>
          <Button variant="outlined" color="primary">
            查看文档
          </Button>
          <ContactUsBtn
            variant="contained"
            color="primary"
            buttonmargin={margin}
          >
            联系我们
          </ContactUsBtn>
        </div>
      </HeaderCenter>
    </HeaderWrapper>
  );
};

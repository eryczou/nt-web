import styled, { keyframes } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";

export const BannerWrapper = styled.div`
  background: #1A202C;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`

export const IntroLeft = styled(Grid)`
  padding: 96px 64px;
  font-size: 3.3333rem;
  font-weight: 900;
`;

export const IntroTypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-weight: 800;
    color: #fff;
  }
`;

export const SubIntroTypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    color: #AEB0B4;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const TypistWrapper = styled(Typist)`
  && {
    text-align: left;
    span {
      font-size: 3rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 800;
      line-height: 1.5;
      letter-spacing: -0.00833em;
      color: #f9b934;
    }
    .Cursor {
      display: inline-block;
    }
    .Cursor--blinking {
      opacity: 1;
      animation: ${blinkAnimation} 1s linear infinite;
    }
  }
`;

export const BtnsWrapper = styled.div`
  text-align: left;
`

export const IntroRight = styled(Grid)`
  height: 100%; 
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`


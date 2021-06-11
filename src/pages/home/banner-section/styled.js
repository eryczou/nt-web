import styled, { keyframes } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";

export const BannerWrapper = styled.div`
  background: rgb(247, 249, 250);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const IntroLeft = styled(Grid)`
  padding: 100px 64px;
  @media (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  font-size: 3.3333rem;
  font-weight: 900;
`;

export const IntroTypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-weight: 800;
    color: #2d3748;
    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
    @media (max-width: 600px) {
      font-size: 2.2rem;
    }
  }
`;

export const SubIntroTypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #5e6c80;
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
      @media (max-width: 1200px) {
        font-size: 2.5rem;
      }
      @media (max-width: 800px) {
        font-size: 1.8rem;
      }
      @media (max-width: 600px) {
        font-size: 2.2rem;
      }
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
    margin-top: min(150px, 10%);
    margin-bottom: min(150px, 10%);
  }
`


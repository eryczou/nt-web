import styled, { keyframes } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";
import poster from '../../../assets/img/home-hero-bg-light.png';

export const IntroLeft = styled(Grid)`
  padding: 96px 64px;
  font-size: 3.3333rem;
  font-weight: 900;
`;

export const IntroTypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-weight: 800;
    color: #2d3748;
  }
`;

export const SubIntroTypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    color: #718096;
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
      font-size: 3.75rem;
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

const backgroundAnimation = keyframes`
  from { background-position: 0 0; }
  to { background-position:  0 100%; }
`

export const IntroRight = styled(Grid)`
  background: url(${poster});
  background-position: 0px 0px;
	background-repeat: repeat-x;
	animation: ${backgroundAnimation} 20s linear infinite;
`


import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const FirstFeatureWrapper = styled(Grid)`
  padding: 60px 64px;
  background: #1A202C;
  box-sizing: border-box;
`

export const FeatureTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #fff;
  }
`;

export const FeatureSubTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    color: #AEB0B4;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

export const FontAwesomeIconWrapper = styled(Grid)`
  text-align: center;
  padding-top: 20px;
  box-sizing: border-box;
  background: #e8eaf6;
  height: 70px;
  width: 70px;
  border-radius: 16px;
  color: rgb(63, 81, 181);
  font-size: 30px;
`;

export const TypographyH6Wrapper = styled(Typography)`
  && {
    font-weight: 700;
    font-size: 1.25rem;
    font-family: Lato;
    text-align: left;
    margin: 15px 0;
    color: #fff;
  }
`;

export const TypographyBodyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-size: 1rem;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
    color: #AEB0B4;
  }
`;

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const FirstFeatureWrapper = styled(Grid)`
  padding: 96px 64px 60px 64px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const FeatureTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #2d3748;
  }
`;

export const FeatureSubTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    color: #5e6c80;
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
    color: #2d3748;
  }
`;

export const TypographyBodyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-size: 1rem;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
    color: #5e6c80;
  }
`;

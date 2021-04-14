import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const SecondFeatureWrapper = styled(Grid)`
  background: rgb(247, 249, 250);
  padding: 60px 64px;
`;

export const LeftPanelWrapper = styled(Grid)``;

export const RightPanelWrapper = styled(Grid)``;

export const ImageWrapper = styled.div`
  background-image: url(${(props) => { return props.imgUrl}});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
`;

export const H3TypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-weight: 900;
    color: #2d3748;
    margin-bottom: 10px;
  }
`;

export const H6TypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-size: 1.25rem;
    color: #718096;
    font-family: Lato;
    font-weight: 500;
    line-height: 1.6;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ButtonsWrapper = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 10px;
`;

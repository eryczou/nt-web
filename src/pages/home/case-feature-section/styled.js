import styled from "styled-components";
import { Grid, Typography, Card, CardMedia } from "@material-ui/core";

export const CaseFeatureWrapper = styled(Grid)`
  background: #2D3748;
  padding: 60px 64px;
`;

export const FeatureTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #fff;
    margin-bottom: 50px;
  }
`;

export const CardWrapper = styled(Card)`
  && {
    background: #1A202C;
    height: 100%;
  }
`

export const CardMediaWrapper = styled(CardMedia)`
  && {
    height: 140px;
  }
`

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

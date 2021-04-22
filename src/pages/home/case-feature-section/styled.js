import styled from "styled-components";
import { Grid, Typography, Card, CardMedia } from "@material-ui/core";

export const CaseFeatureWrapper = styled(Grid)`
  padding: 96px 64px 60px 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const FeatureTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 50px;
  }
`;

export const CardWrapper = styled(Card)`
  && {
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

import styled from "styled-components";
import { Grid, Typography, Card, CardContent, Button } from "@material-ui/core";

export const PricingFeatureWrapper = styled(Grid)`
  padding: 60px 64px;
  background: #1A202C;
`;

export const PricingTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #fff;
    margin-bottom: 30px;
  }
`;

export const PricingSubTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    color: #AEB0B4;
    margin-bottom: 35px;
  }
`;

export const CardWrapper = styled(Card)`
  && {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 5px;
    padding-bottom: 15px;
    transition: 0.2s;
    background: #2D3748;
  }
  &:hover {
    margin-top: -5px;
    margin-bottom: 5px;
    box-shadow: 0 2px 10px 0 rgb(23 70 161 / 11%);
  }   
`

export const CardContentWrapper = styled(CardContent)`
  && {
    text-align: left;
  }
`

export const TypographyTitleWrapper = styled(Typography)`
  && {
    font-family: Lato;
    font-weight: 400;
    line-height: 1.334;
    font-size: 1.4993rem;
    margin-top: 10px;
    color: #fff;
  }
`;

export const TypographySubTitleWrapper = styled(Typography)`
  && {
    color: #AEB0B4;
    font-size: 1rem;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.75;
    margin-bottom: 15px;
  }
`;

export const ItemGridWrapper = styled(Grid)`
  padding-top: 18px;
`

export const FontAwesomeIconWrapper = styled.div`
  && {
    color: #90caf9;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const TypographyItemWrapper = styled(Typography)`
  && {
    font-family: Lato;
    font-weight: 400;
    white-space: nowrap;
    line-height: 1.6;
    font-size: 18px;
    margin-left: 10px;
    color: #fff;
  }
`;

export const TalkButton = styled(Button)`
  && {
    margin-left: 10%;
    width: 80%;
  }
`
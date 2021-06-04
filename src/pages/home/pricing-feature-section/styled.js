import styled from "styled-components";
import { Grid, Typography, Card, CardContent, Button } from "@material-ui/core";

export const PricingFeatureWrapper = styled(Grid)`
  padding-top: 96px;
  padding-bottom: 60px;
  padding-left: 64px;
  padding-right: 64px;
  @media (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const PricingTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 30px;
  }
`;

export const PricingSubTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    color: #5e6c80;
    margin-bottom: 35px;
  }
`;

export const CardWrapper = styled(Card)`
  && {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 5px;
    padding-bottom: 15px;
    transition: 0.2s;
  }
  &:hover {
    margin-top: -5px;
    margin-bottom: 5px;
    box-shadow: 0 2px 10px 0 rgb(23 70 161 / 11%);
  }
`;

export const CardContentWrapper = styled(CardContent)`
  && {
    text-align: left;
  }
`;

export const TypographyTitleWrapper = styled(Typography)`
  && {
    font-family: Lato;
    font-weight: 400;
    line-height: 1.334;
    font-size: 1.4993rem;
    margin-top: 10px;
    color: #2d3748;
  }
`;

export const TypographySubTitleWrapper = styled(Typography)`
  && {
    color: #5e6c80;
    font-size: 1rem;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.75;
    margin-bottom: 15px;
  }
`;

export const ItemGridWrapper = styled(Grid)`
  padding-top: 18px;
`;

export const FontAwesomeIconWrapper = styled.div`
  && {
    color: #0271C7;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const TypographyItemWrapper = styled(Typography)`
  && {
    font-family: Lato;
    font-weight: 400;
    line-height: 1.6;
    font-size: 17px;
    margin-left: 10px;
    color: #2d3748;
  }
`;

export const ActionButton = styled(Button)`
  && {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 15%;
    width: 70%;
  }
`;

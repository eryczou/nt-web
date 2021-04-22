import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

export const CloudsFeatureWrapper = styled(Grid)`
  padding-top: 96px;
  padding-bottom: 60px;
  padding-left: 64px;
  padding-right: 64px;
  @media (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  box-sizing: border-box;
  background: rgb(247, 249, 250);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
export const ImageWrapper = styled.img`
  height: ${(props) => props.height};
  margin-right: 40px;
  @media (max-width: 600px) {
    margin-right: 20px;
  }
  margin-bottom: 20px;
`;

export const TitleTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 40px;
  }
`;

export const FeatureTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #5e6c80;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
  }
`;

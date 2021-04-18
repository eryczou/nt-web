import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

export const CloudsFeatureWrapper = styled(Grid)`
  padding: 60px 64px;
  background: #1a202c;
  box-sizing: border-box;
`;
export const ImageWrapper = styled.img`
  height: 40px;
  margin-right: 40px;
`;

export const FeatureTypographyWrapper = styled(Typography)`
  && {
    text-align: center;
    font-weight: 800;
    color: #fff;
    margin-bottom: 10px;
  }
`;

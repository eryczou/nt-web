import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

export const CloudsFeatureWrapper = styled(Grid)`
  padding: 96px 64px 60px 64px;
  box-sizing: border-box;
  background: rgb(247, 249, 250);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
export const ImageWrapper = styled.img`
  height: ${props => props.height};
  margin-right: 40px;
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
    color: #718096;
    margin-bottom: ${props => props.marginBottom};
  }
`;

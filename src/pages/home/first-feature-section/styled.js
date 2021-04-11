import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

export const UpperSection = styled(Grid)`
  padding: 96px 64px;
`;

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
    color: #718096;
    margin-top: 20px;
  }
`;

export const LowerSection = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1236px;
  height: 100%;
  background: red;
`


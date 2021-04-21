import styled from "styled-components";
import { Grid, Typography} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WorkflowFeatureWrapper = styled(Grid)`
  background: rgb(247, 249, 250);
  padding: 96px 64px 60px 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
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
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

export const LeftPanelWrapper = styled(Grid)`
  padding-bottom: 80px;
  box-sizing: box-border;
`;

export const RightPanelWrapper = styled(Grid)`
  padding-bottom: 80px;
  box-sizing: box-border;
`;

export const ImageWrapper = styled.div`
  background-image: url(${(props) => { return props.imgUrl}});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: ${(props) => { return props.floating}} top;
  height: 100%;
  min-height: 260px;
  margin-left: 40px;
  margin-right: 80px;
`;

export const H3TypographyWrapper = styled(Typography)`
  && {
    text-align: left;
    font-weight: 900;
    color: #2d3748;
    margin-bottom: 20px;
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
    margin-bottom: 20px;
  }
`;

export const ButtonsWrapper = styled(Grid)`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #3f51b5;
  cursor: pointer;
`;

export const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  font-size: 15px;
  margin-left: 15px;
`;
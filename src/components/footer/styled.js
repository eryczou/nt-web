import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

export const FooterWrapper = styled(Grid)`
  height: 100%;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  background: #18181f;
  box-sizing: box-border;
`

export const ContactInfoWrapper = styled(Grid)`
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
  }
`

export const ImageWrapper = styled.img`
  height: ${(props) => props.height};
`;

export const ICPInfo = styled(Typography)`
  display: inline-block;

`
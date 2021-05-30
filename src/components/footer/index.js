import { Grid, Typography } from "@material-ui/core";
import React from "react";
import NT_barcode from "../../assets/img/NT_barcode.png";
import { FooterWrapper, ContactInfoWrapper, ImageWrapper, ICPInfo} from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper container justify="center" spacing={1}>
      <ContactInfoWrapper item xs={10} sm={5} md={4} lg={3}>
        <Typography variant="h6">联系我们</Typography>
        <Typography variant="subtitle1">info@nantutech.com</Typography>
        <ImageWrapper src={NT_barcode} height="80px"/>
      </ContactInfoWrapper>
      <Grid container xs={10} sm={7} md={5} lg={4} justify="space-around" alignItems="flex-end">
        <ICPInfo variant="subtitle1">©2021 All rights reserved</ICPInfo>
        <ICPInfo variant="subtitle1">粤ICP备 20057027号</ICPInfo>
      </Grid>
    </FooterWrapper>
  );
};

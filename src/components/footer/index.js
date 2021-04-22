import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { FooterWrapper } from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper container justify="center" spacing={1}>
      <Grid item xs={10}>
        <Typography variant="h6">联系我们: info@nantutech.com</Typography>
        <Typography variant="h6">公众号: 南图数据科技</Typography>
      </Grid>
      <Grid item xs={10} sm={4} md={3}>
        <Typography variant="subtitle1">©2021 All rights reserved</Typography>
      </Grid>
      <Grid item xs={10} sm={4} md={3}>
        <Typography variant="subtitle1">粤ICP备 20057027号</Typography>
      </Grid>
    </FooterWrapper>
  );
};

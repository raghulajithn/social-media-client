import { Grid } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left, right } = props;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        {left}
      </Grid>
    </Grid>
  );
};

export default GridLayout;

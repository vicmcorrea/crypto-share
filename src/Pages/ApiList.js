import { Grid } from "@material-ui/core";
import React from "react";
import CustomizedTables from "../Components/CustomizedTables";

const ApiList = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "30vh" }}
      spacing={5}
    >
      <>
        <CustomizedTables />
      </>
    </Grid>
  );
};

export default ApiList;

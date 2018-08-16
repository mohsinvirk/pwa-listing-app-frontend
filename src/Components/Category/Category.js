import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import AddItem from "../Ads/AddItem";

class MyAdds extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <AddItem />
          </Grid>
          <Grid item md={4}>
            <AddItem />
          </Grid>
          <Grid item md={4}>
            <AddItem />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(MyAdds);

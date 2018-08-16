import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

class MyAdds extends React.Component {
  _handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <button onClick={this._handleClick}>Goto HomePage</button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(MyAdds);

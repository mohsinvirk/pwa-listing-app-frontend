import React from "react";
import { connect } from "react-redux";
import AdItemForm from "./AdForm";
import Header from "../Header/MainHeader";
import { postAd } from "../../actions/ads";
import { withRouter } from "react-router-dom";
class AdItem extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AdItemForm
          onSubmit={ad => {
            this.props.dispatch(postAd(ad, this.props.history));
            console.log("ad", ad);
          }}
        />
      </div>
    );
  }
}

export default connect()(withRouter(AdItem));

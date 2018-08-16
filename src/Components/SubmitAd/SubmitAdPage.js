import React from "react";
import { connect } from "react-redux";
import AdItemForm from "./AdForm";
import Header from "../Header/MainHeader";
import { postAd } from "../../actions/ads";

class AdItem extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AdItemForm
          onSubmit={ad => {
            this.props.dispatch(postAd(ad));
            console.log(ad);
          }}
        />
      </div>
    );
  }
}

export default connect()(AdItem);

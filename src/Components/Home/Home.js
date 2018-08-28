import React, { Component } from "react";
import Header from "../Header/MainHeader";
import HomeSearch from "./HomeSearch";
import MostRecent from "./MostRecent";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSearch />
        <Categories />
        <MostRecent />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Header from "../Header/MainHeader";
import HomeSearch from "./HomeSearch";
import MostRecent from "./MostRecent";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";
import InstallPrompt from "install-prompt-banner";

class Home extends Component {
  componentDidMount() {
    this.installPromptBanner = new InstallPrompt();
    this.installPromptBanner.addCount().checkPrompt();
  }
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

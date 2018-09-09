import React, { Component } from "react";
import Header from "../Header/MainHeader";
import HomeSearch from "./HomeSearch";
<<<<<<< HEAD
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
=======
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";

class Home extends Component {
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
  render() {
    return (
      <div>
        <Header />
        <HomeSearch />
        <Categories />
<<<<<<< HEAD
        <MostRecent />
=======
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default Home;

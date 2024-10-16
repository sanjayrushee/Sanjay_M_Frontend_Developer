import { Component } from "react";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Features from "./Component/Features";
import Whyus from "./Component/Whyus";
import Tokenomics from "./Component/Tokenomics";
import Roadmap from "./Component/Roadmap";
import Footer from "./Component/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
      <Home />
        <div id="features"><Features /></div>
        <div id="why-us"><Whyus /></div>
        <div id="tokenomics"><Tokenomics /></div>
        <div id="roadmap"><Roadmap /></div>
        <Footer />
      </>
    );
  }
}

export default App;

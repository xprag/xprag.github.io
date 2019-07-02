import React, { Component } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "./components/header";
import Home from "./components/home";
import Speakers from "./components/speakers";
import Call from "./components/call";
import Award from "./components/award";
import GenderPolicy from "./components/gender-policy";
import Program from "./components/program";
import Venue from "./components/venue";
import Error from "./components/error";
import Footer from "./components/footer";
import FurtherInfo from "./components/further-info";
import ReactGA from "react-ga";

const history = createHistory();

ReactGA.initialize("UA-143172373-1");
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/invited-speakers" component={Speakers} />
            <Route path="/call-for-papers" component={Call} />
            <Route path="/award" component={Award} />
            <Route path="/gender-policy" component={GenderPolicy} />
            <Route path="/program" component={Program} />
            <Route path="/venue" component={Venue} />
            <Route path="/further-info" component={FurtherInfo} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

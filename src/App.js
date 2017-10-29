import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Faq from "entrypoints/Faq";
import Guests from "entrypoints/Guests";
import Header from "components/Header";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Guests} />
      <Route path="/gaster" component={Guests} />
      <Route path="/vanliga-fragor" component={Faq} />
      <footer className="Footer" />
    </div>
  </Router>
);

export default App;

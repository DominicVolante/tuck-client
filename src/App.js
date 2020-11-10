import React, { Component } from "react";
import Header from './components/Header';
import HomeRoute from './components/routes/HomeRoute';
//import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddSymptomRoute from './components/routes/AddSymptomRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' component={HomeRoute} exact />
        <Route path='/addsymptom' component={AddSymptomRoute} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/Header";
import HomeRoute from "./components/routes/HomeRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSymptomRoute from "./components/routes/AddSymptomRoute";
import DefaultContext from "./components/context/DefaultContext";
import EditSymptomForm from "./components/EditSymptomForm";

class App extends Component {
  static contextType = DefaultContext;

  state = {
    store: {
      symptoms: [],
    },
    url: "http://localhost:8080",
  };

  updateStore = () => {
    this.getSymptoms();
  };

  getSymptoms = () => {
    fetch(`${this.state.url}/symptoms`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          store: {
            symptoms: res,
          },
        });
      })
      // .catch((err) => {
      //   throw new Error(`Error getting symptoms: ${err.message}`);
      // });
  };

  componentDidMount = () => {
    this.updateStore();
  };

  render() {
    const contextVal = {
      ...this.state,
      updateStore: this.updateStore,
    };
    return (
      <DefaultContext.Provider value={contextVal}>
        <div className="App">
          <Header />
          <Route exact path="/" 
            render={ () => <HomeRoute store={this.state.store} />} 
          />
          <Route path="/addsymptom" component={AddSymptomRoute} />
          <Route path="/edit/:id" component={EditSymptomForm} />
        </div>
      </DefaultContext.Provider>
    );
  }
}

export default App;

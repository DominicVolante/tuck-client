import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SymptomCards from "./SymptomCards";
import DefaultContext from "./context/DefaultContext";

class SymptomList extends Component {
  static contextType = DefaultContext;

  generateSymptomList = () => {
    if (typeof this.props.store !== "object") return;

    return this.props.store.symptoms.map((symptom) => {
      return (
        <SymptomCards
          key={symptom.id}
          id={symptom.id}
          name={symptom.name}
          severity={symptom.severity}
          description={symptom.description}
          store={this.props.store}
        />
      );
    });
  };

  render() {
    return (
      <section className="log">
        <h3>Your log</h3>
        <select name="organize" id="organize">
          <option className="hidden">Sort</option>
          <option value="something">Date</option>
          <option value="something">Severity</option>
        </select>
        <Link to={"/addsymptom/"}>
          Add Symptom
        </Link>
        <ul className="flex-grid">{this.generateSymptomList()}</ul>
      </section>
    );
  }
}

export default SymptomList;

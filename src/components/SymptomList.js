import React, { Component } from "react";
import SymptomCards from "./SymptomCards";

class SymptomList extends Component {
  generateSymptomList = () => {
    return this.props.symptoms.map((symptom) => {
      return (
        <SymptomCards
          key={symptom.id}
          id={symptom.id}
          symptom={symptom.symptom}
          description={symptom.description}
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
        <ul>
          {this.generateSymptomList()}
          <li>Add Symptom</li>
        </ul>
      </section>
    );
  }
}

export default SymptomList;

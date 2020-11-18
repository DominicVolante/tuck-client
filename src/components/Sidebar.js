import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <h3>Your log</h3>
        <div>
          <Link to={"/addsymptom/"}>Add Symptom</Link>
        </div>
        <div>
          <label htmlFor="organize">Sort your Tuck</label>
          <select name="organize" id="organize">
            <option className="hidden">Sort</option>
            <option value="something">Date</option>
            <option value="something">Severity</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;

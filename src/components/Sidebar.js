import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Sidebar extends Component {
  state = {};


  render() {
    return (
      <div className="sidebar">
        <h3>Your log</h3>
        <div>
          <Link to={"/addsymptom/"}><FontAwesomeIcon icon={faPlus} />Add Symptom</Link>
        </div>
        <div>
          <label htmlFor="organize">Sort your Tuck</label>
          <select name="organize" id="organize" onChange={(e) => {this.props.sortList(e.target.value)}}>
            <option className="hidden">Sort</option>
            <option value="date">Date</option>
            <option value="severity">Severity</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;

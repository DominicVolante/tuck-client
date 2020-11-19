import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

//import EditSymptomForm from './EditSymptomForm'
//import { Link } from 'react-router-dom';

class SymptomCards extends Component {
  static contextType = DefaultContext;
  deleteSymptom = () => {
    fetch(`${this.context.url}/symptoms/${this.props.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        this.context.updateStore();
        //this.props.history.push("/");
      })
      .catch((e) => {
        throw new Error(`Error deleting: ${e.message}`);
      });
  };

  render() {
    const { id, name, severity, description } = this.props;

    return (
      <li className="grid-item">
        <h3>{name}</h3>
        <p>{severity}</p>
        <p>{description}</p>
        <button
          id="delete"
          name="delete"
          aria-label="delete"
          className="symptom-button"
          onClick={this.deleteSymptom}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </button>
        <Link
          to={{
            pathname: `/edit/${id}`,
          }}
        >
          <button name="edit" aria-label="edit" aria-pressed="false" className="symptom-button">
            <FontAwesomeIcon icon={faEdit} size="1x" alt="edit icon"/>
          </button>
        </Link>
      </li>
    );
  }
}

export default SymptomCards;

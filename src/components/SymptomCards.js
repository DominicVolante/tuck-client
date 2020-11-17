import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { Link } from "react-router-dom";
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
        <button onClick={this.deleteSymptom}>Delete</button>
        <Link to={{
            pathname:`/edit/${id}`,
            }}>
        <button>Modify</button>
        </Link>
       
      </li>
    );
  }
}

export default SymptomCards;

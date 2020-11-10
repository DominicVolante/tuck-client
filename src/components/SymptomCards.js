import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SymptomCards extends Component {
    render(){
        const date = new Date(this.props.date)
        return(
            <li>
                <h2>{this.props.symptom}</h2>
                <p>{date.toLocaleString()}</p>
                <p>{this.props.description}</p>
                <button>Delete</button>
                <button>Modify</button>
            </li>
        )
    }
}

export default SymptomCards
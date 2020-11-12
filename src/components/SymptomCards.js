import React, { Component } from 'react';
import DefaultContext from './context/DefaultContext'
//import { Link } from 'react-router-dom';

class SymptomCards extends Component {
    static contextType = DefaultContext;

    render(){
        const { id, name, severity, description } = this.props;
        
        return(
            <li>
                <h2>{name}</h2>
                <p>{severity}</p>
                <p>{description}</p>
                <button>Delete</button>
                <button>Modify</button>
            </li>
        )
    }
}

export default SymptomCards
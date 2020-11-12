import React, { Component } from 'react';
import SymptomList from '../SymptomList';
//import dummyData from '../../dummyData';

class HomeRoute extends Component {


    render() {
        return (
            <SymptomList store={this.props.store} />
        )
    }
}

export default HomeRoute;
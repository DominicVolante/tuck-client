import React, { Component } from 'react';
import SymptomList from '../SymptomList';
import Sidebar from '../Sidebar';
//import dummyData from '../../dummyData';

class HomeRoute extends Component {


    render() {
        return (
            <div className="sectionrow">
            <Sidebar />
            <SymptomList store={this.props.store} />
            </div>
        )
    }
}

export default HomeRoute;
import React, { Component } from 'react';
import SymptomList from '../SymptomList';
import dummyData from '../../dummyData';

class HomeRoute extends Component {
    state = {   }

    render() {
        return (
            <SymptomList symptoms={dummyData.symptoms} />
        )
    }
}

export default HomeRoute;
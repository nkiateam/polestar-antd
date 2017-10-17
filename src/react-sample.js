import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sample extends Component {

    static PropTypes = {
        id: PropTypes.string
    };

    static defaultProps = {
        id: 'Sample_ID'
    };

    componentDidMount() {
        console.info("componentDidMount - Sample");
    }

    arrowSample = (target) => {
        console.info("arrow function");
    }

    render() {
        return (
            <div>Sample Code</div>
        );
    }
}

export default Sample;

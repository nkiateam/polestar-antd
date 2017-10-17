import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import Sample from '../../lib/react-sample'

class Example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Sample />
            </div>
        );
    }
}

export default Example;

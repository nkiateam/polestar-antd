import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import Example from './Example'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                차후 Layout 잡아서 업데이트 예정입니다
                <div>
                    ******
                    <Example />
                    ******
                </div>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));

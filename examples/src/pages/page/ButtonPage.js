import React from 'react';
import Button from '../../../../src/Button';

class ButtonPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return [
            <Button key="1">Button Example</Button>,
            <Button key="2" hidden={true}>Button Hide Example</Button>,
        ]
    }
}

export default ButtonPage;
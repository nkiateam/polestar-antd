import React from 'react';
import Button from '../../../../src/Button';

class ButtonPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(Button.ButtonGroup)
        return [
            <Button.Group key="1">
                <Button>Cancel</Button>
                <Button type="primary">OK</Button>
            </Button.Group>
        ]
    }
}

export default ButtonPage;
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
            <Button.Spacing key="1" spacing={15}>
                <Button>Cancel</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
                <Button type="primary">OK</Button>
            </Button.Spacing>
        ]
    }
}

export default ButtonPage;
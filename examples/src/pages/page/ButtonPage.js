import React from 'react';
import Button from '../../../../src/Button';

class ButtonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return [
            <div style={{ border: '1px solid red' }} key="1">
                <Button.Spacing key="1" spacing={4}>
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
            </div>,
        ];
    }
}

export default ButtonPage;

import React from 'react';
import { Button } from 'antd';

class Actions extends React.Component {

    render() {
        return (
            <div className="steps-action polestar-wizard-actions">
                { // Next Button
                    this.props.current < this.props.stepLength - 1
                    &&
                    <Button type="primary" onClick={this.props.handleNext}>Next</Button>
                }
                { // Done Button
                    this.props.current === this.props.stepLength - 1
                    &&
                    <Button type="primary" onClick={this.props.handleDone}>Done</Button>
                }
                { // Previous Button
                    this.props.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} onClick={this.props.handlePrev}>
                        Previous
                    </Button>
                }
            </div>
        )
    }
}

export default Actions;
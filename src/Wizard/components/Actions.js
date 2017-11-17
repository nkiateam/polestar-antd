import React from 'react';
import Button from '../../Button';
import shortId from 'shortid';

class Actions extends React.Component {
    render() {
        return (
            <div className="steps-action polestar-wizard-actions">
                { // Next Button
                    this.props.current < this.props.stepLength - 1
                    &&
                    <Button type="primary" onClick={this.props.handleNext}>{this.props.nextButtonLabel}</Button>
                }
                { // Done Button
                    this.props.current === this.props.stepLength - 1
                    &&
                    <Button type="primary" onClick={this.props.handleDone}>{this.props.doneButtonLabel}</Button>
                }
                { // Previous Button
                    this.props.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} onClick={this.props.handlePrev}>
                        {this.props.prevButtonLabel}</Button>
                }
                {this.props.customButtons.map(node => React.cloneElement(node, {
                    key: shortId.generate(),
                }))}
            </div>
        );
    }
}

export default Actions;

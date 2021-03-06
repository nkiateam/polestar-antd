import React from 'react';
import shortId from 'shortid';
import Button from '../../Button';

class Actions extends React.Component {
    renderNextButton = () => (this.props.current < this.props.stepLength
        ? <Button type="primary" onClick={this.props.handleNext}>{this.props.nextButtonLabel}</Button> : null);

    renderPreviousButton = () => (this.props.current > 0
        ? <Button onClick={this.props.handlePrev}>
            {this.props.prevButtonLabel}</Button> : null);

    renderDoneButton = () => (this.props.current === this.props.stepLength
        ? <Button type="primary" onClick={this.props.handleDone}>{this.props.doneButtonLabel}</Button> : null);

    renderCustomButtons = () => (
        this.props.customButtons.map(node => React.cloneElement(node, {
            key: shortId.generate(),
        }))
    );

    render() {
        return (
            <div className="steps-action polestar-wizard-actions">
                <Button.Spacing>
                    { this.renderCustomButtons() }
                    { this.renderPreviousButton() }
                    { this.renderDoneButton() }
                    { this.renderNextButton() }
                </Button.Spacing>
            </div>
        );
    }
}

export default Actions;

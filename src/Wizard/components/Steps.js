import React from 'react';
import { Steps as AntSteps } from 'antd';

class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            stepPosition,
            stepWidth,
            ...props
        } = this.props;

        const horizontalStyle = {

        };

        const verticalStyle = {
            flex: `0 0 ${this.props.stepWidth}px`,
        };

        return (
            <AntSteps
                {...props}
                className="polestar-wizard-steps"
                style={this.props.direction === 'horizontal' ? horizontalStyle : verticalStyle}
            >
                {this.props.children}
            </AntSteps>
        );
    }
}

export default Steps;

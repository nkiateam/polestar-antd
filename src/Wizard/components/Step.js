import React from 'react';
import PropTypes from 'prop-types';
import { Steps as AntSteps } from 'antd';

const AntStep = AntSteps.Step;

class Step extends React.Component {
    static propTypes = {
        contents: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]),
        validate: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
        ]),
        message: PropTypes.string,
    };

    static defaultProps = {
        contents: '',
        validate: true,
        message: 'message property is not defined. <Wizard.Step message="MY VALIDATION MESSAGE">',
    };

    render() {
        // omit custom properties from this.props
        const {
            validate,
            message,
            contents,
            ...props
        } = this.props;

        return (
            <AntStep {...props}>
                {this.props.children}
            </AntStep>
        );
    }
}

export default Step;

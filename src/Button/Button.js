import React from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import './style/Button.css';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Button extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'danger', 'default']),
        htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
        icon: PropTypes.string,
        shape: PropTypes.oneOf(['circle']),
        size: PropTypes.oneOf(['small', 'default', 'large']),
        /** boolean | { delay: number } */
        loading: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object,
        ]),
        onClick: PropTypes.func,
        ghost: PropTypes.bool
    };

    static defaultProps = {
        type: 'default',
        htmlType: 'button',
        size: 'default',
        loading: false,
        ghost: false,
    };

    render() {
        return (
            <AntButton {...this.props} >
                {this.props.children}
            </AntButton>
        );
    }
}

export default Button;
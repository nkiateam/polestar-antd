import React from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import './style/Button.css';

class Button extends React.Component {

    static propTypes = {
        type: PropTypes.string,
        htmlType: PropTypes.string,
        icon: PropTypes.string,
        shape: PropTypes.string,
        size: PropTypes.string,
        loading: PropTypes.oneOfType([
            PropTypes.object, // { delay: number }
            PropTypes.bool,
        ]),
        onClick: PropTypes.func
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
import React from 'react';
import PropTypes from 'prop-types';

class Spacing extends React.Component {


    static propTypes = {
        spacing: PropTypes.number,
    };

    static defaultProps = {
        spacing: 5,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderChildren = () => {
        const { children } = this.props;
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                style: {
                    marginLeft: this.props.spacing,
                }
            })
        });
    };

    render() {
        return this._renderChildren()
    }
}

export default Spacing;
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

    renderChildren = () => {
        const { children } = this.props;
        return React.Children.map(children, (child, index) => {
            const isLast = index + 1 === React.Children.count(children);
            return child ? React.cloneElement(child, {
                style: {
                    marginRight: isLast ? '' : this.props.spacing,
                    marginTop: this.props.spacing,
                    marginBottom: this.props.spacing,
                },
            }) : null;
        });
    };

    render() {
        return this.renderChildren();
    }
}

export default Spacing;

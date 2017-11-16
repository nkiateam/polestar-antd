import React from 'react';

class Grid extends React.Component {
    render() {
        const horizontalStyle = {
        };

        const verticalStyle = {
            display: 'flex',
        };

        return (
            <div
                className="polestar-wizard-grid"
                style={this.props.direction === 'horizontal' ? horizontalStyle : verticalStyle}
            >
                {this.props.children}</div>
        );
    }
}

export default Grid;

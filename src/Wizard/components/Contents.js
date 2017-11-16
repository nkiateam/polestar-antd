import React from 'react';

class Contents extends React.Component {
    render() {
        const style = {
            flex: 'auto',
            minHeight: this.props.minContentsHeight,
        };

        return (
            <div
                className="polestar-wizard-contents"
                style={style}
            >{this.props.children}</div>
        );
    }
}

export default Contents;

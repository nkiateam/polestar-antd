import React from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import './style/Button.css';

/**
 * Polestar Button Component.
 */
class Button extends React.Component {

    static propTypes = {
        /** 버튼의 스타일 */
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'danger', 'default']),
        /** 버튼의 HTML 타입 */
        htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
        /** 버튼에 삽입할 아이콘의 클래스명 */
        icon: PropTypes.string,
        /** 버튼의 모양 (기본 모양을 사용하고 싶으면 이 props를 정의하지 않으면 됨) */
        shape: PropTypes.oneOf(['circle', 'circle-outline']),
        /** 버튼의 크기 */
        size: PropTypes.oneOf(['small', 'default', 'large']),
        /** boolean | { delay: number } */
        loading: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object,
        ]),
        /** 버튼 onClick 이벤트의 콜백 핸들러 */
        onClick: PropTypes.func,
        /** true 일 경우 숨겨져 있다가 마우스를 올리면 나타난다 */
        ghost: PropTypes.bool,
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
import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { Steps, Step, Contents, Actions, Grid } from './components';
import './style/Wizard.css';

class Wizard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            status: '',
        };
    }

    static propTypes = {
        direction: PropTypes.oneOf(['horizontal', 'vertical']), // Steps 가로/세로 지정
        size: PropTypes.oneOf(['default', 'small']), // Steps의 크기
        stepPosition: PropTypes.oneOf(['left', 'right']), // direction이 vertical일 경우 왼쪽/오른쪽 지정
        stepWidth: PropTypes.number, // Steps 영역의 너비
        center: PropTypes.bool, // 위자드 컴포넌트를 가운데 정렬할 것인지 여부
        width: PropTypes.number, // 위자드 컴포넌트의 너비를 fix
        minContentsHeight: PropTypes.number, // Contents 영역의 최소 높이
    };

    static defaultProps = {
        direction: 'horizontal',
        size: 'default',
        stepPosition: 'left',
        stepWidth: 200,
        center: true,
        minContentsHeight: 200,
    };

    /**
     * Wizard 컴포넌트의 validation 관련 props는 'validation'과 'message' 두 가지가 있다.
     * 'validation' props는 boolean과 function을 받을 수 있으며 false이거나, function의 return값이 false 일 때,
     * 'message' props를 화면에 출력하고 다음 Step으로 넘어가는 것을 막는다.
     *
     * checkValidationProps는 현재 Step의 'validation' props와 'message' props를 검사하고 핸들링한다.
     */
    checkValidatingProps = callback => {
        const currentStepProps = this.props.children[this.state.current].props;
        const currentStepValidateProps = currentStepProps.validate;
        const currentStepMessageProps = currentStepProps.message;
        let flag = true;
        if (typeof currentStepValidateProps === 'function') {
            flag = currentStepValidateProps();
        } else if (typeof currentStepValidateProps === 'boolean') {
            flag = currentStepValidateProps;
        }
        if (flag === false) {
            message.error(currentStepMessageProps);
            this.setState({
                status: 'error'
            })
        } else {
            if (typeof callback === 'function') callback();
            this.setState({
                status: ''
            })
        }
    };

    /**
     * Next 버튼이 클릭되었을 때
     */
    handleNext = () => {
        this.checkValidatingProps(() => {
            const current = this.state.current + 1;
            this.setState({
                current
            });
        });
    }

    /**
     * Done 버튼이 클릭되었을 때
     */
    handleDone = () => {
        this.checkValidatingProps();
    };

    /**
     * Prev 버튼이 클릭되었을 때
     */
    handlePrev = () => {
        const current = this.state.current - 1;
        this.setState({
            current,
            status: ''
        });
    };

    /**
     * Steps 영역을 렌더링
     */
    _renderSteps = (direction, stepPosition) => {
        return (
            <Steps current={this.state.current}
                   size={this.props.size}
                   direction={direction}
                   stepPosition={stepPosition}
                   stepWidth={this.props.stepWidth}
                   status={this.state.status}>
                {this.props.children}
            </Steps>
        )
    };

    /**
     * Contents 영역을 렌더링
     */
    _renderContents = (direction, stepPosition) => {
        const currentStep = Array.isArray(this.props.children) ?
            this.props.children[this.state.current] : this.props.children;
        return (
            <Contents direction={direction}
                      stepPosition={stepPosition}
                      minContentsHeight={this.props.minContentsHeight}
            >{currentStep.props.contents || currentStep.props.children}</Contents>
        )
    };

    /**
     * Actions 영역을 렌더링
     */
    _renderActions = (direction, stepPosition) => {
        return (
            <Actions
                current={this.state.current}
                stepLength={this.props.children.length}
                handleNext={this.handleNext}
                handleDone={this.handleDone}
                handlePrev={this.handlePrev}
                direction={direction}
                stepPosition={stepPosition}
            />
        )
    };

    /**
     * this.props.direction === 'horizontal' 일 경우의 레이아웃을 렌더링
     */
    _renderHorizontalLayout = () => {
        return (
            <div className="polestar-wizard"
                 style={{
                     width: this.props.width ? this.props.width + 'px' : '',
                     margin: this.props.center === true ? '0 auto' : '',
                 }}>
                <Grid direction={this.props.direction}>
                    {this._renderSteps(this.props.direction)}
                    {this._renderContents(this.props.direction)}
                </Grid>
                {this._renderActions(this.props.direction)}
            </div>
        );
    };

    /**
     * this.props.direction === 'vertical' 일 경우의 레이아웃을 렌더링
     */
    _renderVerticalLayout = () => {
        const renderGridByStepPosition = stepPosition => {
            if (stepPosition === 'left') {
                return (
                    <Grid direction={this.props.direction}>
                        {this._renderSteps(this.props.direction)}
                        {this._renderContents(this.props.direction)}
                    </Grid>
                )
            } else if (stepPosition === 'right') {
                return (
                    <Grid direction={this.props.direction}>
                        {this._renderContents(this.props.direction)}
                        {this._renderSteps(this.props.direction)}
                    </Grid>
                )
            }
        };
        return (
            <div className="polestar-wizard"
                 style={{
                     width: this.props.width ? this.props.width + 'px' : '',
                     margin: this.props.center === true ? '0 auto' : '',
                 }}>
                {renderGridByStepPosition(this.props.stepPosition)}
                {this._renderActions(this.props.direction)}
            </div>
        );
    };

    render() {
        if (this.props.direction === 'horizontal') {
            return this._renderHorizontalLayout();
        } else if (this.props.direction === 'vertical') {
            return this._renderVerticalLayout();
        }
    }
}

Wizard.Step = Step;

export default Wizard;
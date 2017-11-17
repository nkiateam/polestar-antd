import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import shortid from 'shortid';
import { Steps, Step, Contents, Actions, Grid } from './components';
import './style/Wizard.css';

/**
 * Polestar Wizard Component.
 */
class Wizard extends React.Component {
    static propTypes = {
        /** direction이 vertical일 경우 Steps의 위치 왼쪽/오른쪽 지정 */
        stepPosition: PropTypes.oneOf(['top', 'left', 'right']), // direction이 vertical일 경우 왼쪽/오른쪽 지정
        /** Steps의 크기 */
        size: PropTypes.oneOf(['default', 'small']), // Steps의 크기
        /** stepPosition이 top일 경우 Steps 영역의 너비 */
        stepWidth: PropTypes.number,
        /** Wizard 컴포넌트의 너비를 지정 */
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        /** Wizard 컴포넌트 가운데 정렬 여부 */
        center: PropTypes.bool, //
        /** Contents 영역의 최소 높이 */
        minContentsHeight: PropTypes.number,
        /** Next 버튼에 표시할 라벨 */
        nextButtonLabel: PropTypes.string,
        /** Previous 버튼에 표시할 라벨 */
        prevButtonLabel: PropTypes.string,
        /** Done 버튼에 표시할 라벨 */
        doneButtonLabel: PropTypes.string,
        /** 기본 버튼셋 이외에 추가하고 싶은 버튼 컴포넌트를 배열로 전달 */
        customButtons: PropTypes.arrayOf(PropTypes.element),
    };

    static defaultProps = {
        size: 'default',
        stepPosition: 'left',
        stepWidth: 200,
        width: '100%',
        center: true,
        minContentsHeight: 200,
        nextButtonLabel: '다음',
        prevButtonLabel: '이전',
        doneButtonLabel: '완료',
        customButtons: [],
    };

    constructor(props) {
        super(props);
        this.id = shortid.generate();
        this.state = {
            current: 0,
            status: '',
            direction: this.props.stepPosition === 'top' ? 'horizontal' : 'vertical',
        };
    }

    componentDidMount() {
        const steps = document.querySelectorAll(`[data-id=${this.id}] .ant-steps-main`);
        for (let i = 0; i < steps.length; i += 1) {
            const step = steps[i];
            step.onclick = () => {
                this.handleStepClick(i);
            };
        }
    }

    /**
     * Wizard 컴포넌트의 validation 관련 props는 'validation'과 'message' 두 가지가 있다.
     * 'validation' props는 boolean과 function을 받을 수 있으며 false이거나, function의 return값이 false 일 때,
     * 'message' props를 화면에 출력하고 다음 Step으로 넘어가는 것을 막는다.
     *
     * checkValidationProps는 현재 Step의 'validation' props와 'message' props를 검사하고 핸들링한다.
     */
    checkValidatingProps = (callback) => {
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
                status: 'error',
            });
        } else {
            if (typeof callback === 'function') callback(flag);
            this.setState({
                status: '',
            });
        }
        return flag;
    };

    /**
     * Step title을 클릭했을 때
     * @param destStepIndex {number} 클릭된 step의 index (첫 번째 step이 0)
     */
    handleStepClick = (destStepIndex) => {
        // 가고자 하는 방향이 정방향인지 역방향인지 (정방향이면 true, 역방향이면 false)
        const isForward = destStepIndex > this.state.current;
        if (isForward) {
            while (this.state.current < destStepIndex) {
                const flag = this.checkValidatingProps();
                if (flag) {
                    const current = this.state.current + 1;
                    this.setState({
                        current,
                    });
                } else {
                    break;
                }
            }
        } else {
            this.setState({
                current: destStepIndex,
                status: '',
            });
        }
    };

    /**
     * Next 버튼이 클릭되었을 때
     */
    handleNext = () => {
        this.checkValidatingProps(() => {
            const current = this.state.current + 1;
            this.setState({
                current,
            });
        });
    };

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
            status: '',
        });
    };

    /**
     * Steps 영역을 렌더링
     */
    renderSteps = (direction, stepPosition) => (
        <Steps
            current={this.state.current}
            size={this.props.size}
            direction={direction}
            stepPosition={stepPosition}
            stepWidth={this.props.stepWidth}
            status={this.state.status}
        >
            {this.props.children}
        </Steps>
    );

    /**
     * Contents 영역을 렌더링
     */
    renderContents = (direction, stepPosition) => {
        const currentStep = Array.isArray(this.props.children) ?
            this.props.children[this.state.current] : this.props.children;
        return (
            <Contents
                direction={direction}
                stepPosition={stepPosition}
                minContentsHeight={this.props.minContentsHeight}
            >{currentStep.props.contents || currentStep.props.children}</Contents>
        );
    };

    /**
     * Actions 영역을 렌더링
     */
    renderActions = (direction, stepPosition) => (
        <Actions
            current={this.state.current}
            stepLength={this.props.children.length}
            handleNext={this.handleNext}
            handleDone={this.handleDone}
            handlePrev={this.handlePrev}
            direction={direction}
            stepPosition={stepPosition}
            nextButtonLabel={this.props.nextButtonLabel}
            prevButtonLabel={this.props.prevButtonLabel}
            doneButtonLabel={this.props.doneButtonLabel}
            customButtons={this.props.customButtons}
        />
    );

    /**
     * this.state.direction === 'horizontal' 일 경우의 레이아웃을 렌더링
     */
    renderHorizontalLayout = () => (
        <div
            className="polestar-wizard"
            style={{
                width: this.props.width ? `${this.props.width}px` : '',
                margin: this.props.center === true ? '0 auto' : '',
            }}
        >
            <Grid direction={this.state.direction}>
                {this.renderSteps(this.state.direction)}
                {this.renderContents(this.state.direction)}
            </Grid>
            {this.renderActions(this.state.direction)}
        </div>
    );

    /**
     * this.state.direction === 'vertical' 일 경우의 레이아웃을 렌더링
     */
    renderVerticalLayout = () => {
        const renderGridByStepPosition = (stepPosition) => {
            if (stepPosition === 'left') {
                return (
                    <Grid direction={this.state.direction}>
                        {this.renderSteps(this.state.direction)}
                        {this.renderContents(this.state.direction)}
                    </Grid>
                );
            } else if (stepPosition === 'right') {
                return (
                    <Grid direction={this.state.direction}>
                        {this.renderContents(this.state.direction)}
                        {this.renderSteps(this.state.direction)}
                    </Grid>
                );
            }
            return null;
        };
        return (
            <div
                className="polestar-wizard"
                style={{
                    width: this.props.width ? `${this.props.width}px` : '',
                    margin: this.props.center === true ? '0 auto' : '',
                }}
            >
                {renderGridByStepPosition(this.props.stepPosition)}
                {this.renderActions(this.state.direction)}
            </div>
        );
    };

    render() {
        const layout = this.props.stepPosition === 'top' ? this.renderHorizontalLayout() : this.renderVerticalLayout();
        return React.cloneElement(layout, {
            'data-id': this.id,
        });
    }
}

Wizard.Step = Step;

export default Wizard;

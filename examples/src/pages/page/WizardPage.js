import React from 'react';
import Button from '../../../../src/Button';
import Wizard from '../../../../src/Wizard';

class WizardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    openWizard = () => {
        this.setState({
            open: true,
        });
    };

    closeWizard = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.openWizard}>위자드 열기</Button>
                <Wizard
                    stepPosition="left"
                    width={1000}
                    modal
                    open={this.state.open}
                    onPrev={() => { console.log('prev'); }}
                    onDone={() => { console.log('done'); this.closeWizard(); }}
                    onNext={() => { console.log('next'); }}
                    onCancel={this.closeWizard}
                >
                    <Wizard.Step title="Step1" description="step1 description">
                        What is Lorem Ipsum?
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Wizard.Step>
                    <Wizard.Step title="Step2" description="step2 description" message="hello" >
                        Step2
                    </Wizard.Step>
                    <Wizard.Step title="Step3" description="step3 description">
                        Step3
                    </Wizard.Step>
                </Wizard>
            </div>
        );
    }
}

export default WizardPage;

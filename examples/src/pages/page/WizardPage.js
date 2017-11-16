import React from 'react';
import Wizard from '../../../../src/Wizard';

class WizardPage extends React.Component {
    render() {
        return (
            <Wizard stepPosition="top" width={700}>
                <Wizard.Step title="Step1" description="step1 description">
                    Step1
                </Wizard.Step>
                <Wizard.Step title="Step2" description="step2 description">
                    Step2
                </Wizard.Step>
                <Wizard.Step title="Step3" description="step3 description">
                    Step3
                </Wizard.Step>
            </Wizard>
        );
    }
}

export default WizardPage;

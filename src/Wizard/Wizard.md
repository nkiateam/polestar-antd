Wizard component example:
```jsx static
import React from 'react';
import Wizard from 'polestar-antd';

class MyComponent extends React.Component {

    render() {
        return (
            <Wizard>
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

export default MyComponent;
```
```js
<Wizard>
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
```
Wizard component props usage:
```js
<Wizard 
    stepPosition="top"
    size="small"
    width={500}
    minContentsHeight={100}>
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
```
Wizard component step validation example:
```js
<Wizard stepPosition="top">
     <Wizard.Step 
         title="Step1" 
         description="step1 description"
         validate={false} // If false, prevents the process from proceeding to the next step and outputs a message
         message="Something wrong!!">
         Step1
     </Wizard.Step>
     <Wizard.Step 
         title="Step2" 
         description="step2 description"
         validate={() => {
             // Validation logic
             return false; // Return false, prevents the process from proceeding to the next step and outputs a message
         }}
         message="Something wrong!!">
         Step2
     </Wizard.Step>
     <Wizard.Step title="Step3" description="step3 description">
         Step3
     </Wizard.Step>
</Wizard>
```
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
         description="step1 description">
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
     <Wizard.Step
         title="Step3"
         description="step3 description"
         validate={false} // If false, prevents the process from proceeding to the next step and outputs a message
         message="Something wrong!!">
         Step3
     </Wizard.Step>
</Wizard>
```

Wizard component custom buttons example:
```js
<Wizard
    customButtons={[
        <Button>커스텀버튼1</Button>,
        <Button>커스텀버튼2</Button>,
        <Button>커스텀버튼3</Button>,
    ]}
>
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

Wizard component modal example:
```js
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <div>

                <Button onClick={() => { this.setState({ open: true }) }}>위자드 열기</Button>

                <Wizard
                    modal
                    width={700}
                    open={this.state.open}
                    onCancel={ () => { this.setState({ open: false }) }}
                    onDone={() => {
                        alert('완료!');
                        this.setState({ open: false });
                    }}
                >
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
            </div>
        );
    }
}

// Render
<MyComponent />
```
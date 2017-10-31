# polestar-antd
[![npm](https://img.shields.io/npm/v/polestar-antd.svg)](https://github.com/nkiateam/polestar-antd)
[![David](https://img.shields.io/david/nkiateam/polestar-antd.svg)](https://david-dm.org/nkiateam/polestar-antd)
[![David](https://img.shields.io/david/dev/nkiateam/polestar-antd.svg)](https://david-dm.org/nkiateam/polestar-antd?type=dev)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nkiateam/polestar-antd/master/LICENSE)

## Installation

```sh
npm install polestar-antd --save-dev
```

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from 'polestar-antd';

const App = () => (
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

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Examples

https://nkiateam.github.io/polestar-antd/examples

## Documentation

https://nkiateam.github.io/polestar-antd/docs

## License

[The MIT License (MIT)](/LICENSE)

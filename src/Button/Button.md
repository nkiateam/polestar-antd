Button component example:
```jsx static
import React from 'react';
import Button from 'polestar-antd';

class MyComponent extends React.Component {

    render() {
        return (
            <Button>Button Example</Button>
        );
    }
}

export default MyComponent;
```
```js
<div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
</div>
```
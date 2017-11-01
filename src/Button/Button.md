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
<div className="example">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
</div>
```
```js
<div className="example">
    <Button type="primary" loading>
     Loading
    </Button>
    <Button type="primary" size="small" loading>
     Loading
    </Button>
    <br />
    <Button shape="circle" loading />
    <Button type="primary" shape="circle" loading />
</div>
```
```js
<div className="example">
    <Button.Group>
      <Button>Cancel</Button>
      <Button type="primary">OK</Button>
    </Button.Group>
    <Button.Group>
      <Button disabled>L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </Button.Group>
    <Button.Group>
      <Button type="primary">L</Button>
      <Button>M</Button>
      <Button>M</Button>
      <Button type="dashed">R</Button>
    </Button.Group>

    <h4>With Icon</h4>
    <Button.Group>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </Button.Group>
</div>
```
```js
<div className="example">
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
</div>
```
```js
  <div className="example">
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(disabled)</Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button>Ghost</Button>
    <Button disabled>Ghost(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(disabled)</Button>
  </div>
```
Ghost Button Example:
버튼 위에 마우스를 올려보세요.
```js
<div className="example" style={{
    padding: '10px 0 0 10px',
    backgroundColor: '#e9e9e9'
}}>
    <Button type="primary" ghost>Primary</Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="danger" ghost>danger</Button>
</div>
```
# react-ztree

## Dependencies
- zTree
- jQuery

## Install

```
npm install react-ztree --save-dev
```

## Build
- npm run Build

## Demo
- npm run examples
- http://localhost:4000/examples/

## Configuration webpack

```
-- webpack
// jquery expose
module: {
   rules: [
       {
          test:require.resolve('jquery'),
          use: [{
              loader: 'expose-loader',
              options: 'jQuery'
          }]
       }
   ],
},
```

## Import css

```
-- css
  -- style
    // css file-path - ../node_modules/ztree/css/zTreeStyle/zTreeStyle.css
    <link rel="stylesheet" href="{public-path}/ztree/css/zTreeStyle/zTreeStyle.css">

  -- import
    @import '~ztree/css/zTreeStyle/zTreeStyle.css';

    /**
     * If a gif file error is found...
     * 1. npm install --save-dev file-loader
     * 2. webpack
     */
    module: {
       rules: [
           {
             test: /\.(png|jpg|gif)$/,
             use: [
               {
                 loader: 'file-loader',
                 options: {}  
               }
             ]
           }
       ],
    }
```

## Example

```
import React from 'react';
import Ztree from 'react-ztree';

class Examples extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data= [{
            name: 'Nkia',
            id:0,
            children: [{
              name: 'R&D',
              id:1
            },{
              name: 'Sales',
              id:2,
              children:[{
                name:'Global',
                id:3
              }]
            }]
          }];
        return (
            <div>
                <Ztree treeId="tree" data={data}/>
            </div>
        );
    }
}

export default Examples;
```

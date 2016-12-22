# Pug-simple-loader

Allow to get html by pug through `pug.render(fileContent, loaderQuery)`.

## Simple example

*template.pug*
```pug
div
    span=title
```

*index.js*
```javascript
var htmlData = require('pug-simple-loader?title=hello!./template.pug');

console.assert( htmlData === '<div><span>hello</span></div>' );
```



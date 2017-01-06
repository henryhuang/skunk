This custom folder, do all of the extensions here. 

### Steps for add custom processor

1. Add **config.json** to this folder, the content is like:

``` json
{
  "processors": [{
    "path": "/test", 
    "processor": "test.processor"
  }]
}
```

- processors

   An array of processor config
   
   - path
   
    The http post path of the processor
    
   - processor
   
    The processor file name without **.js**
    
2. Add the processor file, like **test.processor.js** to this folder, the content is like:
 
 ```
 'use strict'
 module.exports = (req, res, next) => {
    // TODO the processor's process logic
    res.send('This is a basic processor!');
 }
 ```
utils   = require('loader-utils');
pug     = require('pug');
_       = require('lodash');

/**
Filter function.
Compile given pug template to html with query as locals.
*/

module.exports = function (source, map) {
    var queryObj;
    
    this.cacheable();

    queryObj = utils.parseQuery(this.query);
    queryObj = queryObj || {};
    queryObj.filename = this.resourcePath;

    return pug.render(
        source.toString(),
        queryObj
    );
};

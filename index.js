let pug = require('pug');
let fs = require('fs');
global.Promise = require('bluebird');

Promise.config({
    // Enable warnings
    warnings: true,
    // Enable long stack traces
    longStackTraces: true,
    // Enable cancellation
    cancellation: true,
    // Enable monitoring
    monitoring: true
})

module.exports = function(__path__, locals){
    return new Promise(function(resolve, reject){
	fs.readFile(__path__, 'utf8', function(err, data){
	    if(err) reject(err)
	    let fn = pug.compile(data)
	    resolve(fn(locals))
	})
    });
}

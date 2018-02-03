let compile = require('../index')
let JSDOM = require('jsdom').JSDOM;
let uuid = require('uuid');
let path = require('path');
let should = require('should');

describe("Pug compiler", function(){

    it("should compile file ./test.pug", function(){
	compile(path.join(__dirname, 'test.pug'), {
	    title:'Test',
	    id: uuid.v4()
	}).then(function(html){
	    let dom = new JSDOM(html);
	    let document = dom.window.document;
	    document.querySelector('title').textContent.should.equal('Test')
	})
    })
})

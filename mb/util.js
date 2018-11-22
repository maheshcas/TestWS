function logger1(message)
{
    const fs = require('fs');
    var d = new Date();
    let lyrics = d+': '+message+'\n';
    fs.appendFile('2pac.txt', lyrics, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});
}


function xmlExtractor1(body)
{
var xpath = require('C:/NotBackedUp/mountebank-v1.15.0-win-x64/mountebank-v1.15.0-win-x64/mountebank/node_modules/xpath/xpath.js');
var dom = require('C:/NotBackedUp/mountebank-v1.15.0-win-x64/mountebank-v1.15.0-win-x64/mountebank/node_modules/xmldom/dom-parser.js').DOMParser;


var xml = '<address><Action>Insert</Action><Record>Customer1</Record></address>';
		var doc = new dom().parseFromString(xml);
		var nodes = xpath.select('/address/Action/text()',doc).toString();
		console.log('extract='+ nodes);
		return nodes;
}
//module.exports.logger = logger1;

module.exports = {
  logger: logger1,
  xmlextract: xmlExtractor1
};

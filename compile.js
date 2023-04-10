// compile code will go here

// to test and deploy we have to first coompile the contract

// if we directly call the contract by using the require statement , then the code will check it as a javascript code ,
// so we have to add two libraries
// path , fs
 

const path = require ('path');
const fs = require ('fs');
const solc = require ('solc');

const inboxpath = path.resolve(__dirname , 'contracts' , 'Inbox.sol');

const source = fs.readFileSync(inboxpath , 'utf8');

//console.log(solc.compile(source , 1));

module.exports = solc.compile(source,1).contracts[':Inbox'];

// the byte code is the main code data that will be run in the block chain

// the interface is the link between the solidity and the javascript code , it shows all the function


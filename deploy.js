// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const{interface , bytecode} = require('./compile');

const provider = new HDWalletProvider(
    '' , 
    ''
);

const web3 = new Web3(provider);


// we cannot async outside the function so we have to create a function just for the case

const deploy = async() =>{

    const accounts = await web3.eth.getAccounts();

    console.log('deploy from this account ' , accounts[0]);

    // now deploying the contract by using the abi in the form of json parse

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
        data:bytecode , 
        arguments : 'hi there'
    })
    .send({
        gas:'1000000',
        from : accounts[0]
    })

    console.log('contract deploeyed to '  , result.options.address);


};

deploy();
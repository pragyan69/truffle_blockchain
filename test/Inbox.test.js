// contract test code will go here
const assert = require ('assert'); // this is a standard library used for assestion
const ganache = require('ganache-cli');
const Web3 = require('web3'); // this is an constructor of the web3 library  , so we are using upper case
const{interface , bytecode} = require('../compile');
const web3 = new Web3(ganache.provider()); // this is an instance of the web3 which is connecting the web3 to the local network that has been deployed to the computer


// to change the provider we jsut have to change the argument inside the function

// the mocha library uses three function
// it , describe . beforeEach

// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom'
//     }
// }
// let car;
// beforeEach(()=>{
//     car = new Car();
// });
// ÷

// describe('car' , ()=>{
//     it('can park',()=>{
       
//         assert.equal(car.park() , 'stopped');
//     });

//     it('can drive',() =>{

//         assert.equal(car.drive(),'vroom');
//     });
// });
 let accounts;
 let inbox;
beforeEach(async()=>{
    accounts= await web3.eth.getAccounts();

    inbox  = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data:bytecode,
         arguments:[""]
    })
      .send({from:accounts[0]
         , gas:'1000000'
    });
})

describe('Inbox' , ()=>{
    it('deploy the contract', ()=>{
        // console.log(inbox);
        assert.ok(inbox.options.address);
    })

    it('default message' , async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message , '');
    })// verifying the initial message of the contract

     // sending transaction to the contract

     it('we have changed the message' , async()=>{
        await inbox.message.setMessage('').send({from:accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message , '');

     } )
})

// this will deploy 10 accounts


// to deploy the contract we have to use the  accounts presented in the ganache , for this we will need the contract byte code.
 
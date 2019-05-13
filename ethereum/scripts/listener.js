const compiledHMYToken = require('./HarmonyBountyToken.json');
//const Web3 = require('web3');
const _web3 = require('./web3.js');
const BN = require('bn.js');

const projectFolder = '/Users/chao/harmony/zk-dai/ethereum';
var truffleFile = require(projectFolder + '/build/contracts/SecretNote.json');
var abi = truffleFile['abi'];
console.log(abi);

//const provider = new Web3.providers.HttpProvider(
//  'https://ropsten.infura.io/v3/148cf5958fe34905abc3be458055eb30',
//);
//
//let _web3 = new Web3(provider);
// const _web3 = new Web3(
//   new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'),
// );

const hmyContractAddr = '0x4029D1FF3a5485CB12a0Ed891DDde81De8A6F8D4';
let hmyContract = new _web3.eth.Contract(compiledHMYToken.abi, hmyContractAddr);

// hehe
const secretNoteAddress = '0x6851BB170f59D650D214856aa3845381A915c213';

let secretNoteContract = new _web3.eth.Contract(abi, secretNoteAddress);
// exports.module = {secretNoteAddress, abi};

const options = {
  filter: {
    to: secretNoteAddress,
    //from: '0x3f9a8e219Ab1aD42f96b22C294E564B2b48fE636',
  },
  fromBlock: 5343458,
  toBlock: 'latest',
};

async function execute() {
  return new Promise((resolve, reject) => {
    let b = false;
    daiContract.events.Transfer(options, async (error, event) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(event);

      // create secret note
      try {
        const tx = await _web3.eth.getTransaction(event.transactionHash);
        const benefiaciary = tx.from.slice(2);
        const val = new BN(event.returnValues.value, 10)
          .div(new BN('1000000000000000000'))
          .toString('hex');
        if (!b) {
          b = true;
          await createNote(benefiaciary, val);
        }
      } catch (e) {
        console.log(e);
      }
    });
  });
}

async function createNote(address, amount) {
  let enc = encrypt(address, amount);
  console.log('enc', enc);
  await secretNoteContract.methods
    .createNoteDummy('0x' + address, '0x' + amount, enc)
    .send({
      from: '0x666d9dAc081cCEa209091D6e06D76678B09DccA3',
      gasPrice: '0x' + parseInt('10000000000').toString(16),
    });
}

function encrypt(address, _amount) {
  let amount = new BN(_amount, 16).toString(16, 24); // 12 bytes = 24 chars in hex
  const payload = address + amount;
  return payload;
}

module.exports = async function(callback) {
  // perform actions
  await execute();
  callback();
};

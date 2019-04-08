// import web3 from 'web3';
const Web3 = require('web3');
const BN = require('bn.js');

const projectFolder = '/Users/chaoma/harmony/ethsingapore-zk-dai/ethereum';
var truffleFile = require(projectFolder + '/build/contracts/SecretNote.json');
var abi = truffleFile['abi'];

//const provider = new Web3.providers.HttpProvider(
//  'https://ropsten.infura.io/v3/148cf5958fe34905abc3be458055eb30',
//);
//
//let _web3 = new Web3(provider);
const _web3 = new Web3(
  new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'),
);

let daiContract = new _web3.eth.Contract(
  [
    {
      constant: true,
      inputs: [],
      name: 'mintingFinished',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{name: '', type: 'string'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_spender', type: 'address'},
        {name: '_value', type: 'uint256'},
      ],
      name: 'approve',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{name: '', type: 'uint256'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_from', type: 'address'},
        {name: '_to', type: 'address'},
        {name: '_value', type: 'uint256'},
      ],
      name: 'transferFrom',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{name: '', type: 'uint8'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_to', type: 'address'},
        {name: '_amount', type: 'uint256'},
      ],
      name: 'mint',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{name: '_value', type: 'uint256'}],
      name: 'burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_spender', type: 'address'},
        {name: '_subtractedValue', type: 'uint256'},
      ],
      name: 'decreaseApproval',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{name: '_owner', type: 'address'}],
      name: 'balanceOf',
      outputs: [{name: '', type: 'uint256'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_from', type: 'address'},
        {name: '_value', type: 'uint256'},
      ],
      name: 'burnFrom',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'finishMinting',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [{name: '', type: 'address'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{name: '', type: 'string'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_to', type: 'address'},
        {name: '_value', type: 'uint256'},
      ],
      name: 'transfer',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {name: '_spender', type: 'address'},
        {name: '_addedValue', type: 'uint256'},
      ],
      name: 'increaseApproval',
      outputs: [{name: '', type: 'bool'}],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {name: '_owner', type: 'address'},
        {name: '_spender', type: 'address'},
      ],
      name: 'allowance',
      outputs: [{name: '', type: 'uint256'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{name: '_newOwner', type: 'address'}],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {indexed: true, name: 'to', type: 'address'},
        {indexed: false, name: 'amount', type: 'uint256'},
      ],
      name: 'Mint',
      type: 'event',
    },
    {anonymous: false, inputs: [], name: 'MintFinished', type: 'event'},
    {
      anonymous: false,
      inputs: [{indexed: true, name: 'previousOwner', type: 'address'}],
      name: 'OwnershipRenounced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {indexed: true, name: 'previousOwner', type: 'address'},
        {indexed: true, name: 'newOwner', type: 'address'},
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {indexed: true, name: 'burner', type: 'address'},
        {indexed: false, name: 'value', type: 'uint256'},
      ],
      name: 'Burn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {indexed: true, name: 'owner', type: 'address'},
        {indexed: true, name: 'spender', type: 'address'},
        {indexed: false, name: 'value', type: 'uint256'},
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {indexed: true, name: 'from', type: 'address'},
        {indexed: true, name: 'to', type: 'address'},
        {indexed: false, name: 'value', type: 'uint256'},
      ],
      name: 'Transfer',
      type: 'event',
    },
  ],
  //'0xaD6D458402F60fD3Bd25163575031ACDce07538D',
  '0x5211e6196d2a8e4ea7ee3dd961c8d667fbc4727c',
);

//const secretNoteAddress = '0x8F072E625BBC843adECd9D563C3DC3279399499C';
const secretNoteAddress = '0x7F69D34FDd8e446ac08D40553a2D25bEF57DF806';

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
      console.log('hehe');

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
      from: '0x2B522cABE9950D1153c26C1b399B293CaA99FcF9',
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

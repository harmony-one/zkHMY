import Web3 from 'web3';
let web3;

//optimized for server-side rendering and for absent metamask
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //We are in the browser and metamask in running
    console.log("current provider: ", window.web3.currentProvider);
    web3 = new Web3(window.web3.currentProvider);
} else {
    //We are either on the server or the user isn't running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/148cf5958fe34905abc3be458055eb30'
    );

    web3 = new Web3(provider);
}

export default web3;


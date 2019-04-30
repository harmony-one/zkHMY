# zk-HMY

Zero Knowledge Proof on Harmony: 

We demonstrate private HMY ERC20 token transactions on Harmony testnet. 

### Dependency

Install [libsnark](https://github.com/scipr-lab/libsnark) and [zokrates](https://github.com/Zokrates/ZoKrates)

### Development

#### generate smart contract for secret note

```
export ZOKRATES_HOME=/path/to/zokrates_stdlib/stdlib
./zokrates compile -i zk-circuit.code (generate R1CS circuits)
./zokrates setup (generate prover and verifier keys)
./zokrates export-verifier (generate solidity smart contract)
```

#### deploy smart contract

Currently, we are manually deploying the smart contracts. At the same time, we are building Harmony SDK to make smart contract deployment easier. 

The main smart contract is SecretNote.sol. It will call the verifier smart contract (verifier.sol) to verify whether the transaction is legal. We use Zokrates to generate verifier.sol. After deploying our smart contracts, we can use a front end to interact with the smart contract to send and withdraw money without leaking privacy information.

#### Acknowledgement

The code is modified based on zk-Dai project.

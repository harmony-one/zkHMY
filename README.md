# zk-HMY

Private HMY ERC20 token transactions on Harmony testnet. The code is modified based on zk-Dai project.

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

We are working on Harmony SDK to make smart contract deployment easier. Now, we just manually deploy smart contract

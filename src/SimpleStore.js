import { ethers } from "ethers";
import React, { useState } from "react";
import contract_abi from "./contract_abi.json"

export default function SimpleStore() {

    const [account, setAccount] = useState(null);
    const [contractVal, setContractVal] = useState(null);

    // etherjs
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: "eth_requestAccounts" }).then((result) => {
                setAccount(result[0]);
                const tempProvider = new ethers.providers.Web3Provider(window.ethereum)
                setProvider(tempProvider);
                const tempSigner = tempProvider.getSigner();
                setSigner(tempSigner);
                const tempContracts = new ethers.Contract("0x47ce62fac3d9b85f0cd50186a5135ce7e0cfa190", contract_abi, tempSigner);
                setContract(tempContracts);
            })
        } else {
            throw new Error("Need to install Metamask!")
        }
    }

    return (
        <div>
            <h3>Login with your Wallet</h3>
            <button onClick={connectWalletHandler}>Connect Wallet</button>
            <h4>Address: {account}</h4>
        </div>
    )
}

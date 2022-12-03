import { ethers } from "ethers";
import React, { useState } from "react";
import './App.css';
// import SimpleStore from './SimpleStore';

import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingleHabit from "./components/SingleHabit";
import { BannerStrip } from 'web3uikit';

import Homepage from './components/Homepage';
import contract_abi from "./contract_abi.json";

const CONTRACT_ADDRESS = "0x9506faa99444fA1fD8496E2B5e56991e1a807840";

function App() {

  const [account, setAccount] = useState(null);
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
        const tempContracts = new ethers.Contract(CONTRACT_ADDRESS, contract_abi, tempSigner);
        setContract(tempContracts);
      })
    } else {
      throw new Error("Need to install Metamask!")
    }
  }

  const addHabit = ({ title, commitment, amount, totalReports, intervalInSeconds }) => {
    contract.createHabit(title, commitment, totalReports, intervalInSeconds, {
      value: ethers.utils.parseEther(amount.toString()),
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header onConnect={connectWalletHandler} />
        <div>{account}</div>
        {/* <SimpleStore /> */}
        <Routes>
          <Route exact path="/" element={<Homepage addHabit={addHabit} account={account} />} />
          <Route exact path="/habit/:id" element={<SingleHabit />} />
          <Route exact path="*" element={<BannerStrip
            text="404: Page Not Found"
            type="error"
          />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

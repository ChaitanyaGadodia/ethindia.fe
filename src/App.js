import { ethers } from "ethers";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BannerStrip } from 'web3uikit';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import SingleHabit from "./components/SingleHabit";
import contract_abi from "./contract_abi.json";

const CONTRACT_ADDRESS = "0x9506faa99444fA1fD8496E2B5e56991e1a807840";

function App() {

  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const [habitIds, setHabitIds] = useState([]);

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

  const addHabit = async ({ title, commitment, amount, totalReports, intervalInSeconds }) => {
    try {
      const result = await contract.createHabit(title, commitment, totalReports, intervalInSeconds, {
        value: ethers.utils.parseEther(amount.toString()),
      });
    } catch (e) {
    }
  }

  const getAllHabitIds = async () => {
    const result = await contract.getUserHabits(account);
    return result;
  }

  const getHabitById = async (id) => {
    const result = await contract.getHabit(id);
    return result;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header account={account} onConnect={connectWalletHandler} />
        <Routes>
          <Route exact path="/" element={<Homepage onConnect={connectWalletHandler} addHabit={addHabit} account={account} getAllHabitIds={getAllHabitIds} getHabitById={getHabitById} />} />
          <Route exact path="/habit/:id" element={<SingleHabit />} />
          <Route exact path="*" element={<BannerStrip text="404: Page Not Found" type="error" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

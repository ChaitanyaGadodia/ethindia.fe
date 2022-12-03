import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HabitsList from './components/User';
import AddHabit from './components/AddHabit';
import HowToUse from './components/Usage';
import HabitJournal from './components/HabitJournal';
import contract_abi from "./contract_abi.json"
import { ethers } from "ethers";

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
        const tempContracts = new ethers.Contract("0x9506faa99444fA1fD8496E2B5e56991e1a807840", contract_abi, tempSigner);
        setContract(tempContracts);
      })
    } else {
      throw new Error("Need to install Metamask!")
    }
  }

  const addHabit = () => {
    contract.createHabit("Pushup", "25 Pushups daily", 30, 86400, {
      value: ethers.utils.parseEther("0.001"),
    });
  }

  return (
    <div className="App">
      <Header onConnect={connectWalletHandler} />
      <div>For Individuals / Groups / Workspaces</div>
      <div>Put Money on the line!</div>
      <div>{account}</div>
      {/* <SimpleStore /> */}
      {account ?
        <>
          <Dashboard />
          <div style={{ margin: "0.5rem auto", width: "480px", padding: "0.5rem", border: "1px solid rgb(193, 216, 231)", borderRadius: "1rem" }}>
            <HabitsList addHabit={addHabit} />
          </div>
        </> : <HowToUse />}
      <HabitJournal />
    </div>

  );
}

export default App;

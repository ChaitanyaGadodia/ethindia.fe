import './App.css';
// import SimpleStore from './SimpleStore';
import { useMoralis } from "react-moralis";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HabitsList from './components/User';
import AddHabit from './components/AddHabit';
import HowToUse from './components/Usage';

function App() {
  const { account } = useMoralis();

  return (

    <div className="App">
      <Header />
      <div>For Individuals / Groups / Workspaces</div>
      <div>Put Money on the line!</div>
      {/* <SimpleStore /> */}
      {account ?
        <>
          <Dashboard />
          <div style={{ margin: "0.5rem auto", width: "480px", padding: "0.5rem", border: "1px solid rgb(193, 216, 231)", borderRadius: "1rem" }}>
            <HabitsList />
          </div>
        </> : <HowToUse />}
    </div>

  );
}

export default App;

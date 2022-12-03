import './App.css';
// import SimpleStore from './SimpleStore';
import { MoralisProvider } from "react-moralis";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HabitsList from './components/User';
import AddHabit from './components/AddHabit';

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="App">
        <Header />
        <div>For Individuals / Groups / Workspaces</div>
        {/* <SimpleStore /> */}
        <Dashboard />
        <HabitsList />
        <AddHabit />
      </div>
    </MoralisProvider>
  );
}

export default App;

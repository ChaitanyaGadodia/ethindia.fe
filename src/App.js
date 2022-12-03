import './App.css';
// import SimpleStore from './SimpleStore';
import { MoralisProvider } from "react-moralis";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HabitsList from './components/User';

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="App">
        <Header />
        {/* <SimpleStore /> */}
        <Dashboard />
        <HabitsList />
      </div>
    </MoralisProvider>
  );
}

export default App;

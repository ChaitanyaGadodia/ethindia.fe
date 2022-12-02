import './App.css';
// import SimpleStore from './SimpleStore';
import { MoralisProvider } from "react-moralis";
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="App">
        <Header />
        {/* <SimpleStore /> */}
        <Dashboard />
      </div>
    </MoralisProvider>
  );
}

export default App;

import './App.css';
// import SimpleStore from './SimpleStore';
import { useMoralis } from "react-moralis";
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingleHabit from "./components/SingleHabit";
import { BannerStrip } from 'web3uikit';

import Homepage from './components/Homepage';

function App() {
  const { account } = useMoralis();

  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <SimpleStore /> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
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

import * as React from "react";
import { useMoralis } from "react-moralis";

import Dashboard from "./Dashboard";
import HabitsList from "./User";
import HowToUse from "./Usage";

const HomePage = ({ addHabit, account }) => {
  return (
    <React.Fragment>
      {account ? (
        <>
          {/* <Dashboard /> */}
          <div
            style={{
              margin: "0.5rem auto",
              width: "480px",
              padding: "0.5rem",
              border: "1px solid rgb(193, 216, 231)",
              borderRadius: "1rem",
            }}
          >
            <HabitsList addHabit={addHabit} />
          </div>
        </>
      ) : (
        <HowToUse />
      )}
    </React.Fragment>
  );
};

export default HomePage;

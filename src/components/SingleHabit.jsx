import * as React from "react";

import { Hero, Typography, ENSAvatar } from "web3uikit";
import HabitJournal from "./HabitJournal";
const SingleHabit = ({ addJournal }) => {
  return (
    <>
      <Hero
        style={{ margin: "1rem" }}
        align="right"
        backgroundColor="#F5F5F5"
        padding="40px"
        rounded="20px"
      >
        <React.Fragment>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "8px",
              justifyContent: "space-between",
            }}
          >
            <>
              <ENSAvatar
                address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" // account address
                size={50}
              />
              <Typography variant="h3">ENS Name or Address</Typography>
            </>
            he
          </div>
          <Typography variant="h4">Goal comes here </Typography>
          <div>
            <Typography variant="caption16">I commit to: </Typography>
            <Typography variant="caption14">lorem dem ispum </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="caption14">Successful Reports: 5</Typography>
            <Typography variant="caption14">Unsuccessful Reports: 1</Typography>
          </div>
        </React.Fragment>
      </Hero>
      <HabitJournal addJournal={addJournal} />
    </>
  );
};

export default SingleHabit;

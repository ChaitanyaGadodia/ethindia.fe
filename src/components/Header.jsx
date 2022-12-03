import React from "react";
import { ConnectButton, Typography } from "web3uikit";
import { useMoralis } from "react-moralis";

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
};

export default function Header() {
  const { account } = useMoralis();

  return (
    <div style={header}>
      <Typography onCopy={function noRefCheck() {}} variant="H2">
        App Name
      </Typography>
      <ConnectButton /> {/** Using the web3uikit */}
    </div>
  );
}

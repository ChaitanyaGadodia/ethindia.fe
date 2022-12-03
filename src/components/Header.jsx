import React from "react";
import { Button, ConnectButton, Typography } from "web3uikit";

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
};

export default function Header({ onConnect, account }) {
  return (
    <div style={header}>
      <a href="/">
        <Typography variant="H2">
          HabETH - Ready to finally stick to your Goals?
        </Typography>
      </a>
      <Button
        onClick={onConnect}
        disabled={!!account}
        text={!account ? "Connect Wallet" : `Connected ${account}`}
      />
      {/* <ConnectButton /> */}
      {/** Using the web3uikit */}
    </div>
  );
}

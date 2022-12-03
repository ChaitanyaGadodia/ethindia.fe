import * as React from "react";
import { Badge, Typography, Widget } from "web3uikit";

const container = {
  margin: "1rem",
  padding: "1rem",
  border: "1px solid rgb(193, 216, 231)",
  borderRadius: "1rem",
};

const innerContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const badge = {
  color: "#fff",
  background: "rgb(0, 209, 174)",
  padding: "0.25rem",
  borderRadius: "0.5rem",
};

export default function CompletedHabitsCard({
  habitId,
  description,
  duration,
  completedOn,
}) {
  return (
    <div style={container}>
      <div style={innerContainer}>
        <Typography>{description}</Typography>
        <div style={badge}>{`Completed ${completedOn}`}</div>
      </div>
      <div style={innerContainer}>
        <Typography variant="caption12">{habitId}</Typography>
        <Typography variant="caption14">Duration: {duration}</Typography>
      </div>
    </div>
  );
}

import * as React from "react";
import { Button, Input, Modal, Select, Typography } from "web3uikit";

const inputStyle = {
  margin: "10px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const INTERVALS = [
  { label: "Daily", id: 1 },
  { label: "Weekly", id: 2 },
  { label: "Bi-weekly", id: 3 },
  { label: "Monhtly", id: 4 },
];

const INITIAL_STATE = {
  openModal: false,
  description: "",
  interval: "Daily",
  parner: "",
  amount: undefined,
};

export default class AddHabit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    const { description, interval, partner, amount, openModal } = this.state;

    return (
      <>
        <Button
          onClick={() => this.setState({ openModal: true })}
          text="Add Habit"
        />
        <Modal
          isVisible={openModal}
          onCancel={() => this.setState({ ...INITIAL_STATE })}
          onOk={() => {}}
          onCloseButtonPressed={() => this.setState({ ...INITIAL_STATE })}
          width="500px"
        >
          <div style={formStyle}>
            <Typography>Add Habit</Typography>
            <Input
              label="Description"
              onChange={(e) => this.setState({ description: e.target.value })}
              value={description}
              style={inputStyle}
            />
            <Select
              label="Interval"
              onChange={(e) => {
                this.setState({ interval: e[0] });
              }}
              value={interval}
              options={INTERVALS}
              style={inputStyle}
              width="320px"
            />
            <Input
              label="Accountability Partner Wallet Address"
              onChange={(e) => this.setState({ partner: e.target.value })}
              value={partner}
              style={inputStyle}
            />
            <Input
              label="Total Amount"
              onChange={(e) => this.setState({ amount: e.target.value })}
              value={amount}
              type="number"
              style={inputStyle}
            />
          </div>
        </Modal>
      </>
    );
  }
}

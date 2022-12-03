import * as React from "react";
import HabitsCard from "./HabitsCard";
import { TabList, Tab } from "web3uikit";
import AddHabit from "./AddHabit";

const habitsContainer = {
  margin: "1rem auto",
};

const HABIT_STATUS = [
  {
    key: "ACTIVE",
    value: "Active",
  },
  {
    key: "COMPLETED",
    value: "Completed",
  },
];

const completedHabits = [
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    completedOn: "12/12/22 13:35:23",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    goal: "Running?",
    description: "Go for a morning run.",
    duration: "2 weeks",
    status: "Active",
  },
];

export default function HabitsList() {
  const [selectedType, setSelectedType] = React.useState(HABIT_STATUS[0].key);
  const [habits, setHabits] = React.useState([]);

  React.useEffect(() => {
    // Get the Data for habits and set it
    setHabits(completedHabits);
  }, [selectedType]);

  return (
    <div style={habitsContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: "2.75rem",
        }}
      >
        <TabList
          defaultActiveKey={selectedType}
          onChange={(value) => setSelectedType(value)}
          tabStyle="bulbUnion"
        >
          {HABIT_STATUS.map((status) => {
            return (
              <Tab tabKey={status.key} tabName={`${status.value} Habits`} />
            );
          })}
        </TabList>
        <AddHabit />
      </div>
      <div style={{ maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
        {habits.map((habit) => {
          return (
            <HabitsCard
              goal={habit.goal}
              description={habit.description}
              status={habit.status}
              completedOn={habit.completedOn}
              duration={habit.duration}
            />
          );
        })}
      </div>
    </div>
  );
}

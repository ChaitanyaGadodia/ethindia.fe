import * as React from "react";
import CompletedHabitsCard from "./CompletedHabitsCard";

const habitsContainer = {
  width: "50%",
};

export default function HabitsList() {
  return (
    <div style={habitsContainer}>
      <CompletedHabitsCard
        habitId="126234"
        description="Doing something"
        completedOn="12/12/22 13:35:23"
        duration="2"
      />
    </div>
  );
}

import * as React from "react";
import Dashboard from "./Dashboard";
import HabitsList from "./User";
import HowToUse from "./Usage";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

const HomePage = ({ addHabit, account, getHabitById, getAllHabitIds }) => {
  const [habits, setHabits] = useState([]);
  const [habitIds, setHabitIds] = useState([]);

  const fetchHabits = useCallback(async () => {
    if (account) {
      const result = await getAllHabitIds();
      setHabitIds(result);
      const habits = await Promise.all[result.map((id) => getHabitById(id))];
      setHabits(habits);
    }
  });

  useEffect(() => {
    fetchHabits();
  });

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
            <div>{habits && habits.length}</div>
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

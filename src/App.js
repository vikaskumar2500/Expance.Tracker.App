/* eslint-disable no-undef */
import React from "react";

import ExpanceItem from "./components/ExpanceItem";
import Card from "./components/UI/Card";
import ExpanceForm from "./components/ExpanceForm";

const expances = [
  {
    title: "Food",
    amount: 10,
    LocationOfExpenditure: "Rajstan",
    date: new Date(2023, 7, 3),
  },

  {
    title: "Petrol",
    amount: 100,
    LocationOfExpenditure: "Delhi",
    date: new Date(2023, 1, 6),
  },

  {
    title: "Movies",
    amount: 200,
    LocationOfExpenditure: "Mumbai",
    date: new Date(2023, 4, 27),
  },

  {
    title: "Picknic",
    amount: 500,
    LocationOfExpenditure: "Goa",
    date: new Date(2023, 3, 31),
  },
];

const App = () => {
  return (
    <div className="expancesItems">
      <ExpanceForm />
      <Card>
        <div className="titles">
          <div className="date">Date</div>
          <div className="details">
            <div className="title">Title</div>
            <div className="location">Location</div>
            <div className="amount">Amount</div>
            <div className="button">Btn</div>
          </div>
        </div>

        {/* we can use loop */}
        <div>
          {expances.map((items) => {
            return (
              <ExpanceItem
                date={items.date}
                title={items.title}
                amount={items.amount}
                location={items.LocationOfExpenditure}
              />
            );
          })}
        </div>
      </Card>
      {/* <ExpanceItem
        title={expances[0].title}
        amount={expances[0].amount}
        LocationOfExpenditure={expances[0].LocationOfExpenditure}
      />

      <ExpanceItem
        title={expances[1].title}
        amount={expances[1].amount}
        LocationOfExpenditure={expances[1].LocationOfExpenditure}
      />

      <ExpanceItem
        title={expances[2].title}
        amount={expances[2].amount}
        LocationOfExpenditure={expances[2].LocationOfExpenditure}
      /> */}
    </div>
  );
};

export default App;

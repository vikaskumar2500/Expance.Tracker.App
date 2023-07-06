/* eslint-disable no-undef */
import React, { useState } from "react";
import ExpanceItem from "./components/Expances";
import Card from "./components/UI/Card";
import ExpanceForm from "./components/Forms/ExpanceForm";
import ExpanceFilter from "./components/ExpanceItems/ExpanceFilter";

const expances = [];

const App = () => {
  let [state, setState] = useState(expances);
  // we can retrive the data using function.
  const expanceDataHandler = (product) => {
    setState((prevState) => [
      ...prevState,
      { ...product, id: Math.random().toString() },
    ]); // most efficient method
  };
  // console.log(state);

  const [filterValue, setFilterValue] = useState("no filter");
  const filterDataHandler = (value) => {
    setFilterValue(value);
  };
  let filteredItems = state;

  if (filterValue !== "no filter")
    filteredItems = state.filter((items) => {
      return items.date.year === filterValue;
    });

  // check the filteredItems is empty or not?
  let filteredContent = <p>No Expences are found!!</p>;
  // we can add the more com
  if (filteredItems.length > 0)
    filteredContent =
      filteredItems.length === 1
        ? (filteredContent = filteredItems.map((items, index) => {
            return (
              <div>
                <ExpanceItem
                  key={index}
                  date={items.date}
                  title={items.title}
                  amount={items.amount}
                  location={items.location}
                />
                <p>Only single Expense here. Please add more...</p>
              </div>
            );
          }))
        : (filteredContent = filteredItems.map((items, index) => {
            return (
              <ExpanceItem
                key={index}
                date={items.date}
                title={items.title}
                amount={items.amount}
                location={items.location}
              />
            );
          }));

  return (
    <div className="expancesItems">
      <ExpanceForm onExpanceDta={expanceDataHandler} />
      <Card className="expancesItem">
        <div className="titles">
          <div className="date">Date</div>
          <div className="details">
            <div className="title">Title</div>
            <div className="location">Location</div>
            <div className="amount">Amount</div>
            <div className="button">Btn</div>
          </div>
        </div>
        <ExpanceFilter
          Selected={filterValue}
          onFilterHandler={filterDataHandler}
        />

        {/* we can use loop */}
        <div>{filteredContent}</div>
      </Card>
    </div>
  );
};

export default App;

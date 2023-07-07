import React, { useState } from "react";
import "./Expences.css";
import ExpencesList from "./ExpencesList";
import ExpencesFilter from "./ExpencesFilter";
import ExpencesForm from "../Forms/ExpencesForm";
import Card from "../UI/Card";

const Expences = () => {
  // check the filteredItems is empty or not?
  const expances = [];
  let [state, setState] = useState(expances);
  // we can retrive the data using function.
  const expanceDataHandler = (product) => {
    setState((prevState) => [...prevState, { ...product }]); // most efficient method
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

  return (
    <div className="expences">
      <ExpencesForm onExpanceDta={expanceDataHandler} />

      <Card className="expences-items">
        <ExpencesFilter
          Selected={filterValue}
          onFilterHandler={filterDataHandler}
        />
        <div>
          <ExpencesList items={filteredItems} />
        </div>
      </Card>
    </div>
  );
};

export default Expences;

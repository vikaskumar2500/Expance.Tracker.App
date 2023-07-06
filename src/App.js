/* eslint-disable no-undef */
import React, { useState } from "react";
import ExpanceItem from "./components/ExpanceItem";
import Card from "./components/UI/Card";
import ExpanceForm from "./components/Forms/ExpanceForm";
import ExpanceFilter from "./components/ExpanceItems/ExpanceFilter";

const expances = [];

const App = () => {
  const [state, setState] = useState(expances);
  // we can retrive the data using function.
  const expanceDataHandler = (product) => {
    setState((prevState) => [...prevState, {...product,id:Math.random().toString()}]); // most efficient method
  };
  // console.log(state);

  const [filterValue, setFilterValue] = useState('');
  const filterDataHandler = (value)=>{
    setFilterValue(value);
  }


  return (
    <div className="expancesItems">
      
      <ExpanceForm onExpanceDta={expanceDataHandler} />
      <Card className="expancesItem">

        <div className="titles">
          <div>FilterYear</div>
          <div className="date">Date</div>
          <div className="details">
            <div className="title">Title</div>
            <div className="location">Location</div>
            <div className="amount">Amount</div>
            <div className="button">Btn</div>
          </div>
        </div>
        <ExpanceFilter Selected = {filterValue} onFilterHandler={filterDataHandler} />

        {/* we can use loop */}
        <div>
          {state.map((items) => {
            return (
              <ExpanceItem
                date={items.date}
                title={items.title}
                amount={items.amount}
                location={items.location}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default App;

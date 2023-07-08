import React from "react";

import "./ExpencesList.css";
import ExpencesItem from "./ExpencesItem";
import { v4 as uuidv4 } from "uuid";

const ExpencesList = (props) => {
  if (props.items.length === 0)
    return (
      <ul key={uuidv4()} className="expencesList-1">
        <h3 key={uuidv4()} >No Expences are found</h3>
      </ul>
    );
  else if (props.items.length === 1)
    return props.items.map((item) => (
      <ul key={uuidv4()} className="expencesList-2">
        <ExpencesItem
          key={uuidv4()}
          title={item.title}
          amount={item.amount}
          location={item.location}
          date={item.date}
        />
        <p>Only single Expense here. Please add more...</p>
      </ul>
    ));
  else
    return (
      <ul key={uuidv4()} className="expencesList-3">
        {props.items.map((expence) => (
          <ExpencesItem
            key={uuidv4()}
            title={expence.title}
            amount={expence.amount}
            location={expence.location}
            date={expence.date}
          />
        ))}
      </ul>
    );
};

export default ExpencesList;


import "./ExpencesList.css";
import ExpencesItem from "./ExpencesItem";
import { v4 as uuidv4 } from "uuid";

const ExpencesList = (props) => {

  if (props.items.length === 0)
    return (
      <ul key={uuidv4()} className="expencesList-1">
        <h3>No Expences are found</h3>
      </ul>
    );
  else if (props.items.length === 1)
    return props.items.map((expense) => (
      <ul key={uuidv4()} className="expencesList-2">
        <ExpencesItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
          onDeleteExpense={props.onDeleteExpense}
        />
        <p>Only single Expense here. Please add more...</p>
      </ul>
    ));
  else
    return (
      <ul key={uuidv4()} className="expencesList-3">
        {props.items.map((expense) => (
          <ExpencesItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
            onDeleteExpense={props.onDeleteExpense}
          />
        ))}
      </ul>
    );
};

export default ExpencesList;

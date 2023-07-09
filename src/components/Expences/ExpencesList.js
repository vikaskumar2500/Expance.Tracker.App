import "./ExpencesList.css";
import ExpencesItem from "./ExpencesItem";
import { v4 as uuidv4 } from "uuid";

const ExpencesList = (props) => {
  // console.log(props.items);
  

  const modifyFilterHandler = (id) => {
    // calculate the index of target item.
    props.onModifyFilterExpences(id);
  };


  if (props.items.length === 0)
    return (
      <ul id={uuidv4()} className="expencesList-1">
        <h3 id={uuidv4()}>No Expences are found</h3>
      </ul>
    );
  else if (props.items.length === 1)
    return props.items.map((item) => (
      <ul id={uuidv4()} className="expencesList-2">
        <ExpencesItem
          id={uuidv4()}
          title={item.title}
          amount={item.amount}
          location={item.location}
          date={item.date}
          onModifyFilter={modifyFilterHandler}
        />
        <p>Only single Expense here. Please add more...</p>
      </ul>
    ));
  else
    return (
      <ul id={uuidv4()} className="expencesList-3">
        {props.items.map((expence) => (
          <ExpencesItem
            id={uuidv4()}
            title={expence.title}
            amount={expence.amount}
            location={expence.location}
            date={expence.date}
            onModifyFilter={modifyFilterHandler}
          />
        ))}
      </ul>
    );
};

export default ExpencesList;

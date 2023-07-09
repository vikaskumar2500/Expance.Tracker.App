import "./ExpencesItem.css";
import ExpencesDate from "./ExpencesDate";
import ExpencesDetail from "./ExpencesDetail";
import Card from "../UI/Card";
import {v4 as uuidv4} from 'uuid';

const ExpencesItem = (props) => {
  const deleteExpenseHandler = (e) => {
    // lifting up the Id to the Expences.js compnents.
    // console.log(props);
    props.onDeleteExpense(props.id);
  };

  return (
    <li id={uuidv4()} className="expenceItem-list">
      <Card className="expencesItem">
        <ExpencesDate date={props.date} />
        <ExpencesDetail
          key={props.id}
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
        <button type="submit" className="btn btn-click" onClick={deleteExpenseHandler}>
          Delete
        </button>
      </Card>
    </li>
  );
};

export default ExpencesItem;

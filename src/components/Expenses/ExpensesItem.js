import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import ExpensesDetail from "./ExpensesDetail";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";

const ExpensesItem = (props) => {
  const deleteExpenseHandler = (e) => {
    // lifting up the Id to the Expences.js compnents.
    // console.log(props);
    props.onDeleteExpense(props.id);
  };

  return (
    <li id={uuidv4()} className="expenceItem-list">
      <Card className="expencesItem">
        <ExpensesDate date={props.date} />
        <ExpensesDetail
          key={props.id}
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
        <Button
          variant="danger"
          type="submit"
          className="btn btn-click"
          onClick={deleteExpenseHandler}
        >
          Delete
        </Button>
      </Card>
    </li>
  );
};

export default ExpensesItem;

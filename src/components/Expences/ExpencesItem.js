import "./ExpencesItem.css";
import ExpencesDate from "./ExpencesDate";
import ExpencesDetail from "./ExpencesDetail";
import Card from "../UI/Card";
import {v4 as uuidv4} from 'uuid';

const ExpencesItem = (props) => {
  // using useState for changing the amount.
  // const [amount, setAmount] = useState(props.amount);
  // we can add the delete button.
  const clickHendler = (e) => {
    
    e.preventDefault();

    // lifting up the Id to the Expences.js compnents.
    props.onModifyFilter(e.target.parentElement.parentElement.id);
    // e.target.parentElement.remove();
    // setAmount(100);
  };

  return (
    <li id={uuidv4()} className="expenceItem-list">
      <Card className="expencesItem">
        <ExpencesDate date={props.date} />
        <ExpencesDetail
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
        <button type="submit" className="btn btn-click" onClick={clickHendler}>
          Delete
        </button>
      </Card>
    </li>
  );
};

export default ExpencesItem;

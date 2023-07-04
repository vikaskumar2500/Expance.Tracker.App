import React, {useState} from 'react'
import "./ExpanceItem.css";
import ExpanceDate from "./ExpanceItems/ExpanceDate";
import ExpanceDetails from "./ExpanceItems/ExpanceDetails";
import Card from "./UI/Card";

// function ExpanceItem(props) {
//   return (
//     <div className="expanceItems">
//       <div className="expanceTitle">{props.title}</div>
//       <div className="expanceAmount" >Rs{props.amount}</div>
//       <div className="expanceLocation">{props.LocationOfExpenditure}</div>
//     </div>
//   );
// }

const ExpanceItem = (props) => {

  const [title, setTile] = useState(props.title);

  // we can add the delete button.
  const clickHendler = (e) => {
    // e.target.parentElement.remove();
    setTile('Updated!');
  };
  return (
    <Card className="expance-item">
      <ExpanceDate date={props.date} />
      <ExpanceDetails
        title={title}
        amount={props.amount}
        location={props.location}
      />
      <button className="btn btn-click" onClick={clickHendler}>
        Delete
      </button>
    </Card>
  );
};

export default ExpanceItem;

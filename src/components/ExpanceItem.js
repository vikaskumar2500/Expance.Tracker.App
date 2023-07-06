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

  // using useState for changing the amount.
  const [amount, setAmount] = useState(props.amount);

  // we can add the delete button.
  const clickHendler = (e) => {
    // e.target.parentElement.remove();
    setAmount(100);
  };

  

  return (
    <Card className="expance-item">
      
      <ExpanceDate date={props.date} />
      <ExpanceDetails
        title={props.title}
        amount={amount}
        location={props.location}
      />
      <button className="btn btn-click" onClick={clickHendler}>
        Expance
      </button>
    </Card>
  );
};

export default ExpanceItem;

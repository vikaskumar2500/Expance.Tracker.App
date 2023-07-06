import React, {useState} from 'react'
import "./ExpanceItem.css";
import ExpanceDate from "./ExpanceItems/ExpanceDate";
import ExpanceDetails from "./ExpanceItems/ExpanceDetails";
import Card from "./UI/Card";
import ExpanceFilter from './ExpanceItems/ExpanceFilter';

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

  const [filterValue, setFilterValue] = useState('');
  const filterDataHandler = (value)=>{
    setFilterValue(value);
  }
  // console.log(props.date);

  // const getDate=(prevState)=>{
  //   return {...prevState, year:filterValue};
  // }
  let getDate =props.date;
  if(filterValue) getDate= {...props.date, year:filterValue};
  console.log(filterValue);
  return (
    <Card className="expance-item">
      <ExpanceFilter Selected = {filterValue} onFilterHandler={filterDataHandler} />
      <ExpanceDate date={getDate} />
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

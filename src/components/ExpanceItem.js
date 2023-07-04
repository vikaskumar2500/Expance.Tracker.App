import "./ExpanceItem.css";
import ExpanceDate from "./Expances/ExpanceDate";
import ExpanceDetails from "./Expances/ExpanceDetails";
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

const ExpanceItem=(props)=> {
  return (
    <Card className="expance-item">
      <ExpanceDate date={props.date} />
      <ExpanceDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </Card>
  );
}

export default ExpanceItem;

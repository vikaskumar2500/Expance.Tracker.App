import "./ExpanceItem.css";
import ExpanceDate from "./subComponents/ExpanceDate";
import ExpanceDetails from "./subComponents/ExpanceDetails";

// function ExpanceItem(props) {
//   return (
//     <div className="expanceItems">
//       <div className="expanceTitle">{props.title}</div>
//       <div className="expanceAmount" >Rs{props.amount}</div>
//       <div className="expanceLocation">{props.LocationOfExpenditure}</div>
//     </div>
//   );
// }

function ExpanceItem(props) {
  return (
    <div className="expance-item">
      <ExpanceDate date={props.date} />
      <ExpanceDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </div>
  );
}

export default ExpanceItem;

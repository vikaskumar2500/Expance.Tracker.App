import "./ExpanceItem.css";

function ExpanceItem(props) {
  return (
    <div className="expanceItems">
      <div className="expanceTitle">{props.title}</div>
      <div className="expanceAmount" >Rs{props.amount}</div>
      <div className="expanceLocation">{props.LocationOfExpenditure}</div>
    </div>
  );
}

export default ExpanceItem;

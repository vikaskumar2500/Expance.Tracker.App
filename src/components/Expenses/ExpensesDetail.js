import "./ExpensesDetail.css";


const ExpensesDetail=(props)=> {
  
  return (
    <div className="expence-details">
      <div className="expence-details-title">{props.title}</div>
      <div className="expence-details-location">{props.location}</div>
      <div className="expence-details-amount">${props.amount}</div>
      
    </div>
  );
}

export default ExpensesDetail;

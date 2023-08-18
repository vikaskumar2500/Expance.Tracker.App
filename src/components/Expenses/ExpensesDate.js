import "./ExpensesDate.css";

const ExpensesDate = (props) => {
  // const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" }).substr(0,3);
  // const year = props.date.getFullYear();
  const date = props.date.date;
  const month = props.date.month;
  const year = props.date.year;
  return (
    <div className="expence-date">
      <div className="expence-data-month">{month}</div>
      <div className="expence-data-year">{year}</div>
      <div className="expence-date-date">{date}</div>
    </div>
  );
};

export default ExpensesDate;

import "./ExpanceDate.css";

const ExpanceDate=(props)=> {
  // const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" }).substr(0,3);
  // const year = props.date.getFullYear();

  const date = props.date.date;
  const month = props.date.month;
  const year = props.date.year;
  return (
    <div className="expance-date">
      <div className="expance-data-month">{month}</div>
      <div className="expance-data-year">{year}</div>
      <div className="expance-date-date">{date}</div>
    </div>
  );
}

export default ExpanceDate;

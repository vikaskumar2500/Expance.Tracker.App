import "./ExpanceForm.css";
// import ExpanceItem from "./ExpanceItems/ExpanceDetails";
const ExpanceForm = (props) => {
  const clickHandler = (e) => {
    const items = document.querySelector('.items');
    const input = items.querySelectorAll('input');
    input.forEach(ele=>console.log(ele.value));
  };
  return (
    <div className="expance-form">
      <form action="#" className="form">
        <div className="items">
          <label for="title"></label>
          <input type="text" id="title" required />

          <label for="amount"></label>
          <input type="number" id="amount" min={1} step={1} required />

          <label for="date"></label>
          <input type="date" id="date" required />
        </div>
        <div className="button">
          <button className="btn btn-form" onClick={clickHandler}>
            Add Expances
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpanceForm;

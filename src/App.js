/* eslint-disable no-undef */
import ExpanceItem from "./components/ExpanceItem";

const expances = [
  {
    title: "Food",
    amount: 10,
    LocationOfExpenditure: "Kolkata",
  },

  {
    title: "Petrol",
    amount: 100,
    LocationOfExpenditure: "Delhi",
  },

  {
    title: "Movies",
    amount: 200,
    LocationOfExpenditure: "Mumbai",
  },

  {
    title: "Picknic",
    amount: 500,
    LocationOfExpenditure: "Goa"
  }
];

function App(props) {
  return (
    <div className="expancesItems">
      <h2>Expance Items</h2>
      <div className="titles">
        <div>Title</div>
        <div>Location</div>
        <div>Amount</div>
      </div>

      {/* we can use loop */}
      {expances.map(items => {
        return (<ExpanceItem
          title={items.title}
          amount={items.amount}
          LocationOfExpenditure={items.LocationOfExpenditure}
        />);
      })}
      {/* <ExpanceItem
        title={expances[0].title}
        amount={expances[0].amount}
        LocationOfExpenditure={expances[0].LocationOfExpenditure}
      />

      <ExpanceItem
        title={expances[1].title}
        amount={expances[1].amount}
        LocationOfExpenditure={expances[1].LocationOfExpenditure}
      />

      <ExpanceItem
        title={expances[2].title}
        amount={expances[2].amount}
        LocationOfExpenditure={expances[2].LocationOfExpenditure}
      /> */}
    </div>
  );
}

export default App;

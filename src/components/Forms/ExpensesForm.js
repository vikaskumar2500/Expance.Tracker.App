import React, { useState } from "react";
import "./ExpensesForm.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";

const ExpensesForm = (props) => {
  // individually define states
  let [enteredTitle, setEneteredTitle] = useState("");
  let [enteredAmount, setEneteredAmount] = useState("");
  let [enteredLocation, setEnteredLocation] = useState("");
  let [enteredDate, setEneteredDate] = useState("");

  // in one state set multiple states
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (e) => {
    setEneteredTitle(e.target.value);

    // SOME TIMES IT WILL GIVES WRONG O/P.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // });

    // BEST WAY
    // setUserInput((prevState)=>{
    //     return {...userInput, enteredTitle:e.target.value};
    // })
    // setUserInput.printTitle();
  };
  const amountChangeHandler = (e) => {
    setEneteredAmount(e.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount:e.target.value
    // });

    // BEST WAY
    // setUserInput((prevState)=>{
    //     return {...userInput, enteredAmount:e.target.value};
    // })
  };

  const locationChangeHandler = (e) => {
    setEnteredLocation(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEneteredDate(e.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate:e.target.value
    // });

    // BEST WAY
    // setUserInput((prevState)=>{
    //     return {...userInput, enteredDate:e.target.value};
    // })
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nub",
    "Dec",
  ];
  // Date
  let [year, month, date] = enteredDate.split("-");
  month = Number(month);
  if (month[0] === 0) month = month.substring(1);
  month = months[month - 1];

  const formSumbitHandler = (e) => {
    e.preventDefault();

    // store in the object as product.
    const product = {
      id: uuidv4(),
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredLocation,
      date: {
        date: date,
        month: month,
        year: year,
      },
    };

    // lifting up the data (child to parent component) using call back function.
    props.onAddExpenceData(product);
    // after submiting form we have to clear the values Using Two way data binding(VVVI);
    setEneteredTitle("");
    setEneteredAmount("");
    setEnteredLocation("");
    setEneteredDate("");
  };

  const cancelExpencesHandler = () => {
    // lifting up data.
    props.onCancelExpenceBtn();
  };

  return (
    <div className="expence-form">
      <form action="#" className="form" onSubmit={formSumbitHandler}>
        <h2 className="form-heading">Enter Your Expenses</h2>
        <div className="items">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter your title..."
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />

          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            min={0.01}
            step={0.01}
            placeholder="Enter your amount..."
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />

          <label htmlFor="title">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter your location..."
            value={enteredLocation}
            onChange={locationChangeHandler}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            min="2000-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="button">
          <Button type="submit" className="btn btn-submit-form">
            Add Expance
          </Button>

          <Button
            variant="danger"
            type="button"
            className="btn btn-cancel-form"
            onClick={cancelExpencesHandler}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExpensesForm;

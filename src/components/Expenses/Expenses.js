/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesForm from "../Forms/ExpensesForm";
import AddExpensesForm from "../Forms/AddExpensesForm";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import { v4 as uuidv4 } from "uuid";

const Expenses = () => {
  // Handler the filteredItems is empty or not??
  const expenses = [
    {
      id:uuidv4(),
      title: "Food",
      amount: 45.85,
      location: "Mumbai",
      date: {
        date: "3",
        month: "May",
        year: "2020",
      },
    },
    {
      id:uuidv4(),
      title: "Trip",
      amount: 80.35,
      location: "Manali",
      date: {
        date: "31",
        month: "Dec",
        year: "2022",
      },
    },
    {
      id:uuidv4(),
      title: "Bloging",
      amount: 100,
      location: "Delhi",
      date: {
        date: "23",
        month: "Oct",
        year: "2022",
      },
    },
    {
      id:uuidv4(),
      title: "Meeting",
      amount: 40,
      location: "Saharsa",
      date: {
        date: "15",
        month: "Jul",
        year: "2023",
      },
    },
    {
      id:uuidv4(),
      title: "Selfie",
      amount: 50.99,
      location: "Goa",
      date: {
        date: "21",
        month: "Apr",
        year: "2023",
      },
    },
  ];
  let [state, setState] = useState(expenses);
  let [checkAddNewExpence, setCheckAddNewExpence] = useState(false);
  let [checkCancelExpence, setCheckCancelExpence] = useState(false);

  // we can retrieve the data using function From ExpencesForm.js
  const expenceDataHandler = (expense) => {
    setState((prevState) => [expense, ...prevState]); // most efficient method
    setCheckAddNewExpence(false);
  };

  // Retrieve the Cancel button excess from ExpencesForm.js
  const expenceCancelBtnHandler = () => {
    setCheckCancelExpence(true);
  };

  // Retrieve the Add new Expence button excess from AddExpencesForm.js
  const addNewExpenceHandler = () => {
    setCheckAddNewExpence(true);
    // reseting the checkCancelExpence value so that cycle will continue!
    setCheckCancelExpence(false);
  };

  let [filterValue, setFilterValue] = useState("no filter");
  // Retrieve the filter button datas from ExpencesFilter.js
  const filterDataHandler = (value) => {
    setFilterValue(value);
  };
  // let filteredItems = state;

  // if filter will apply
  let filteredExpenses = state;
  if (filterValue !== "no filter" && state.length > 0) {
    filteredExpenses = state.filter(
      (expense) => expense.date.year === filterValue
    );
  }

  // setting up Form according to our need
  let appearedForm = (
    <AddExpensesForm onAddNewExpenceBtn={addNewExpenceHandler} />
  );
  if (checkAddNewExpence && !checkCancelExpence) {
    appearedForm = (
      <ExpensesForm
        onAddExpenceData={expenceDataHandler}
        onCancelExpenceBtn={expenceCancelBtnHandler}
      />
    );  
  }
  // console.log('before',filteredItems.length);
  // writing function for the delete button.
  const deleteExpenseHandler = (id) => {
    setState((prevState) => {
      return prevState.filter((expense) => expense.id !== id);
    });
  };
  // console.log('after',filteredItems.length);

  return (
    <div className="expences">
      {appearedForm}

      <Card className="expences-items">
        <ExpensesFilter
          Selected={filterValue}
          onFilterHandler={filterDataHandler}
        />

        <ExpensesChart expenses={filteredExpenses} filterValue={filterValue} />
        <div>
          <ExpensesList
            onDeleteExpense={deleteExpenseHandler}
            items={filteredExpenses}
          />
        </div>
      </Card>
    </div>
  );
};

export default Expenses;

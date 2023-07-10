/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Expences.css";
import ExpencesList from "./ExpencesList";
import ExpencesFilter from "./ExpencesFilter";
import ExpencesForm from "../Forms/ExpencesForm";
import AddExpencesForm from "../Forms/AddExpencesForm";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expences = () => {
  // check the filteredItems is empty or not?
  const expenses = [];
  let [state, setState] = useState(expenses);
  let [checkAddNewExpence, setCheckAddNewExpence] = useState(false);
  let [checkCancelExpence, setCheckCancelExpence] = useState(false);

  // we can retrieve the data using function From ExpencesForm.js
  const expenceDataHandler = (expense) => {
    setState((prevState) => [expense, ...prevState]); // most efficient method
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
    <AddExpencesForm onAddNewExpenceBtn={addNewExpenceHandler} />
  );
  if (checkAddNewExpence && !checkCancelExpence) {
    appearedForm = (
      <ExpencesForm
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
        <ExpencesFilter
          Selected={filterValue}
          onFilterHandler={filterDataHandler}
        />
        {filterValue !== "no filter" && (
          <ExpensesChart expenses={filteredExpenses} />
        )}
        <div>
          <ExpencesList
            onDeleteExpense={deleteExpenseHandler}
            items={filteredExpenses}
          />
        </div>
      </Card>
    </div>
  );
};

export default Expences;

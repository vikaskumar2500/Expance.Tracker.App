/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Expences.css";
import ExpencesList from "./ExpencesList";
import ExpencesFilter from "./ExpencesFilter";
import ExpencesForm from "../Forms/ExpencesForm";
import AddExpencesForm from "../Forms/AddExpencesForm";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";

const Expences = () => {
  // check the filteredItems is empty or not?
  const expences = [];
  let [state, setState] = useState(expences);
  let [checkAddNewExpence, setCheckAddNewExpence] = useState(false);
  let [checkCancelExpence, setCheckCancelExpence] = useState(false);

  // we can retrieve the data using function From ExpencesForm.js
  const expenceDataHandler = (product) => {
    setState((prevState) => [...prevState, { ...product, key: uuidv4() }]); // most efficient method
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
  let filteredItems = state;

  // if filter will apply
  if (filterValue !== "no filter") {
    filteredItems = state.filter((items) => {
      return items.date.year === filterValue;
    });
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

  // modify 
  const modifyFilterExpencesHandler = (id) => {
    // calculate the index of target item.
    const indexId = filteredItems.findIndex(
      (expence) => expence.id === id
    );
    // delete the target item only.
    filteredItems.splice(indexId, 1);
    setState(filteredItems);
    // setModifyFilter([...expences]);
  };

  return (
    <div className="expences">
      {appearedForm}
      <Card className="expences-items">
        <ExpencesFilter
          Selected={filterValue}
          onFilterHandler={filterDataHandler}
        />
        <div>
          <ExpencesList
            onModifyFilterExpences={modifyFilterExpencesHandler}
            items={filteredItems}
          />
        </div>
      </Card>
    </div>
  );
};

export default Expences;

import "./AddExpencesForm.css";

const AddExpencesForm = (props) => {
  const addNewExpencesHandler = () => {
    props.onAddNewExpenceBtn();
  };
  return (
    <div className="addExpencesForm">
      <button
        type="submit"
        className="btn addExpencesForm-btn"
        onClick={addNewExpencesHandler}
      >
        Add New Expences
      </button>
    </div>
  );
};

export default AddExpencesForm;

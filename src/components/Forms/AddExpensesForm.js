import { Button } from "react-bootstrap";
import "./AddExpensesForm.css";

const AddExpensesForm = (props) => {
  const addNewExpencesHandler = () => {
    props.onAddNewExpenceBtn();
  };
  return (
    <div className="addExpencesForm">
      <Button
        
        type="submit"
        variant="info"
        className="btn addExpencesForm-btn"
        onClick={addNewExpencesHandler}
      >
        Add New Expences
      </Button>
    </div>
  );
};

export default AddExpensesForm;

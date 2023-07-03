function ExpanceItem(props) {
  return (
    <div>
      <div>
        <div>
          {props.title} Rs: {props.amount} {props.LocationOfExpenditure}
        </div>
      </div>
    </div>
  );
}

export default ExpanceItem;

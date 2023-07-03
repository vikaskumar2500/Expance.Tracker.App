import './ExpanceDate.css';

function ExpanceDate(props) {

    const date = props.date.toLocaleString('en-US', {day:'2-digit'});
    const month = props.date.toLocaleString('en-US', {month:'long'});

    const year = props.date.getFullYear();

    return (
        <div className='expance-date'>
            <div className='expance-data-month'>{month}</div>
            <div className='expance-data-year'>{year}</div>
            <div className='expance-date-date'>{date}</div>
        </div>
    )

}


export default ExpanceDate;
import './Card.css';

const Card = (props)=>{
    const newClass = `card ${props.className}`;
    return <div className={newClass}>{props.children}</div>
}

export default Card;
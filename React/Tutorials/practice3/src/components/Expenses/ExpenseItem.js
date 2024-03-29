import {useState} from 'react'
import Card from '../UI/Card/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css'




function ExpenseItem(props) {
    //always return an array to 2 values 
    const [title,setTitle] = useState(props.title)

    const onClickHandler = () => {
        setTitle('Updated');
        console.log(title)
    }
    

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={onClickHandler}>Click me</button>
            </div>
        </Card>)
}

export default ExpenseItem;
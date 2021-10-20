//import {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'

const onClickHandler = () => {
    console.log('Clicked')
}


function ExpenseItem(props) {



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
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    //Initialising State
    const [addExpense,setAddExpense] = useState(true)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)

    }

    const onAddExpense = () => {
        setAddExpense(false)
    }

    const onCancel = () => {
        setAddExpense(true)
    }

    let form;
    if (addExpense) {
        form = <button type='button' onClick={onAddExpense}>Add Expense</button>
    }
    else {
        form = (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancel}
        />)
    }

    return (<div className="new-expense">
        {form}
    </div>)

}

export default NewExpense;
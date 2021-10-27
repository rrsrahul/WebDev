import { useState } from "react/cjs/react.development"
import ExpensesFilter from "../UI/ExpenseFilter/ExpensesFilter"
import ExpensesList from './ExpensesList'
import './ExpenseItems.css'
import Card from "../UI/Card/Card"

function ExpenseItems(props) {
    //initialise State
    //const [expenses,] = useState(props.expenses);

    //const [filterExpenses, setFilterExpenses] = useState('');
    //const [filter, setFilter] = useState(false)
    const [filteredYear, setfilteredYear] = useState('2020')


    let expenseItems;
    expenseItems =props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    const onFilterHandler = (year) => {

        setfilteredYear(year)

    }

    return (<div>
        <Card className='expenses'>

            <ExpensesFilter selectedYear={filteredYear} onFilter={onFilterHandler} />
            <ExpensesList items={expenseItems}/>
        </Card>
    </div>)
}

export default ExpenseItems;
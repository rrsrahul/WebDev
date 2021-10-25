import { useState } from "react/cjs/react.development"
import ExpenseItem from "./ExpenseItem"
import Card from "./UI/Card/Card"
import ExpensesFilter from "./UI/ExpenseFilter/ExpensesFilter"

function ExpenseItems(props) {
    const [expenses, ] = useState(props.expenses);
    const [filterExpenses, setFilterExpenses] = useState('');
    const [filter, setFilter] = useState(false)

    let expenseItems;
    if (filter === false) {
        expenseItems = expenses.map((expenseItem, idx) => {
            return (<ExpenseItem date={expenseItem.date}
                key={idx}
                amount={expenseItem.amount}
                title={expenseItem.title} />)
        })
    }
    else {
        expenseItems = filterExpenses.map((expenseItem, idx) => {
            return (<ExpenseItem date={expenseItem.date}
                key={idx}
                amount={expenseItem.amount}
                title={expenseItem.title} />)
        })
    }

    const onFilterHandler = (year) => {
        let newExpenses = expenses.filter(expense => {
            console.log(year === expense.date.getFullYear().toString())
            return expense.date.getFullYear().toString() === year
        })
        setFilter(true)
        setFilterExpenses(newExpenses)

    }

    return (<div>
        <ExpensesFilter onFilter={onFilterHandler} />
        <Card>
            {expenseItems}
        </Card>
    </div>)
}

export default ExpenseItems;
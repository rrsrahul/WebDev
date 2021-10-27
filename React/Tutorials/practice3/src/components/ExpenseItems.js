import { useState } from "react/cjs/react.development"
import ExpenseItem from "./ExpenseItem"
import Card from "./UI/Card/Card"
import ExpensesFilter from "./UI/ExpenseFilter/ExpensesFilter"

function ExpenseItems(props) {
    //initialise State
    //const [expenses,] = useState(props.expenses);

    const [filterExpenses, setFilterExpenses] = useState('');
    const [filter, setFilter] = useState(false)
    const [filteredYear, setfilteredYear] = useState('2020')


    let expenseItems;
    if (filter === false) {
        expenseItems = props.expenses.map((expenseItem, idx) => {
            console.log(expenseItem.title)
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
        let newExpenses = props.expenses.filter(expense => {
            return expense.date.getFullYear().toString() === year
        })
        setFilter(true)
        setFilterExpenses(newExpenses)
        setfilteredYear(year)

    }

    return (<div>
        <Card>

            <ExpensesFilter selectedYear={filteredYear} onFilter={onFilterHandler} />
            {expenseItems}
        </Card>
    </div>)
}

export default ExpenseItems;
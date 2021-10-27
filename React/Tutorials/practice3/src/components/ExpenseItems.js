import { useState } from "react/cjs/react.development"
import ExpenseItem from "./ExpenseItem"
import Card from "./UI/Card/Card"
import ExpensesFilter from "./UI/ExpenseFilter/ExpensesFilter"

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
    expenseItems = expenseItems.map((expenseItem, idx) => {
        return (<ExpenseItem date={expenseItem.date}
            key={idx}
            amount={expenseItem.amount}
            title={expenseItem.title} />)
    })
    console.log(expenseItems);
   

    const onFilterHandler = (year) => {

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
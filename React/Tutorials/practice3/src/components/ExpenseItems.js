import ExpenseItem from "./ExpenseItem"

function ExpenseItems(props) {

    let expenseItems = props.expenses.map((expenseItem) => {
        return (<ExpenseItem date={expenseItem.date}
            amount={expenseItem.amount}
            title={expenseItem.title} />)
    })

    return (<div>
        {expenseItems}
    </div>)
}

export default ExpenseItems;
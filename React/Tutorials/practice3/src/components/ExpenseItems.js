import ExpenseItem from "./ExpenseItem"
import Card from "./Card"

function ExpenseItems(props) {

    let expenseItems = props.expenses.map((expenseItem) => {
        return (<ExpenseItem date={expenseItem.date}
            amount={expenseItem.amount}
            title={expenseItem.title} />)
    })

    return (<Card>
        {expenseItems}
    </Card>)
}

export default ExpenseItems;
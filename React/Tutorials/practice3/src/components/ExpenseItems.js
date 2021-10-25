import ExpenseItem from "./ExpenseItem"
import Card from "./Card"

function ExpenseItems(props) {

    let expenseItems = props.expenses.map((expenseItem,idx) => {
        return (<ExpenseItem date={expenseItem.date}
            key={idx}
            amount={expenseItem.amount}
            title={expenseItem.title} />)
    })

    return (<Card>
        {expenseItems}
    </Card>)
}

export default ExpenseItems;
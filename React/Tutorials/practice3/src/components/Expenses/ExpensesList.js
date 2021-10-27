import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <p className='expenses-list__fallback'>No Expenses</p>
    }

    let items = props.items.map((expenseItem, idx) => {
        return (<ExpenseItem date={expenseItem.date}
            key={idx}
            amount={expenseItem.amount}
            title={expenseItem.title} />)

    }
    )

    return (<ul className='expenses-list'>
        {items}
    </ul>)
}

export default ExpensesList;
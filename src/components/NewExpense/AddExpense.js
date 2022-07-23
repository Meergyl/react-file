


import ExpenseForm from "./ExpenseForm"
import "./AddExpense.css"

const AddExpense=({ addExpenseHandler})=>{
    return(
        <div className="new-expense">
            <ExpenseForm  addExpenseHandler={ addExpenseHandler} />
        </div>
    )
}
export default AddExpense
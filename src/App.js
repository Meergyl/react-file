
import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import AddExpense from "./components/NewExpense/AddExpense";





function App() {
  const[expenses,setExpenses]=useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },

  ])

  const addExpenseHandler=(expense)=>{
    setExpenses([...expenses,expense])
   
  }
  return (
    <div>
      <AddExpense addExpenseHandler={addExpenseHandler} />
      {expenses.map((el,index,array)=>{
        return(
          <ExpenseItem
         key={el.id} 
        date={el.date}
        title={el.title}
        amount={el.amount}
      />

        )
      })}
      
    </div>
  );
}

export default App;

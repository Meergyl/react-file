import { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

function ExpenseItem(props){
    const[localeTitle,setLocaleTitle]=useState(props.title)
    // let localeTitle=props.title
    function titleChange(){
       setLocaleTitle("Uptadet")
       console.log(localeTitle)
    }
    
      
    return(
        <div className="expense-item ">
            <ExpenseDate date={props.date}/>
        
            <div className="expense-item__description">
                <h2>{localeTitle}</h2>
                <div className="expense-item__price">{props.amount}$</div>
          
           
            </div>

        </div>
    )
}

export default ExpenseItem
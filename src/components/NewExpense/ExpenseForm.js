import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = props =>{
    
    const [item,setItem]=useState({
        title:'',
        amount:'',
        date: ''     
    });
    
    const eventHandler = event =>{
        setItem({
            ...item,
            [event.target.name] : event.target.value
        })
    }

    const submitHandler = event =>{
        event.preventDefault();
        setItem(
            {
                title:'',
                amount:'',
                date: ''   
            }
        )
        props.onSaveExpenseData(item)
    }
    
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input value={item.title} name="title" onChange={eventHandler} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input value={item.amount} name="amount" onChange={eventHandler} type="number" min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input value={item.date} name="date" onChange={eventHandler} type="date" min="2022-01-01"/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm
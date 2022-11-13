import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = props => {
    const onSaveExpenseDataHandler = enteredExpenseData =>{
        const expenseData = {
            id: 'e' + Math.round((Math.random()*1000)).toString(),
            ...enteredExpenseData,
            date: new Date(enteredExpenseData.date),
            
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;



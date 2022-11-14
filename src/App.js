import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"
import React, { useState } from "react"

const App = _ => {

  const [expenses, setExpenses] = useState([])

  // REACT OLD WAY TO CREATE ELEMENTS.
  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},"let's get started!"),
  //   React.createElement(Expenses,{expenses:expenses})
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>([expense,...prevExpenses]))
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} expenses={expenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;


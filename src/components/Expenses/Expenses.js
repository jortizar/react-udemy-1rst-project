import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react'


const Expenses = props =>{
    const [toBeFiltered, setFilteredYear] = useState(0)
    const filterChangeHandler = e => {
        setFilteredYear(e)
    }
    const listOfYears = props.expenses.map(expense =>( expense.date.getFullYear()))
    return (
    <Card className = "expenses">
        <ExpensesFilter selected = {toBeFiltered} onChangeFilter = {filterChangeHandler} years={listOfYears}/>
        {toBeFiltered===0?props.expenses.map( e => <ExpenseItem key={e.id} element = {e}/>):
        props.expenses.map(e =>
             e.date.getFullYear() === toBeFiltered &&
            <ExpenseItem key={e.id} element = {e}/>
        )
        }
    </Card>
    )
}

export default Expenses
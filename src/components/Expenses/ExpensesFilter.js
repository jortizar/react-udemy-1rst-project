import React,{useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = props => {
    const dropDownChangeHandler = event =>{
        props.onChangeFilter(parseInt(event.target.value))  
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange ={dropDownChangeHandler}>
                    <option value="0">Clear</option>
                    {props.years.map( year =>
                        <option key={year+Math.round(Math.random(10),2)} value={year}>{year}
                        </option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
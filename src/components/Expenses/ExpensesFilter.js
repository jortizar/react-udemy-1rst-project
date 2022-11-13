import React from 'react';

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
                    <option value="">Clear</option>
                    {props.years.map( year =>
                        <option key={year} value={year}>{year}
                        </option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
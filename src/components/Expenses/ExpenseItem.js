import React,{useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = props => (
        <Card key={props.element.id} className="expense-item">
            <div>
                <ExpenseDate date={props.element.date} />
            </div>
            <div className="expense-item__description">
                <h2>{props.element.title}</h2>
                <div className="expense-item__price">${props.element.amount}</div>
            </div>
        </Card>
    )


export default ExpenseItem;
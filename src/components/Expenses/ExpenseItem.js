import React  from 'react'; 
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
      
        
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          {/* Here we are passing props of App component to Expense Date component as a prop this a comment */}
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
      
    );
}

export default ExpenseItem;
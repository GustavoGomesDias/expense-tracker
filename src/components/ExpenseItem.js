import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const date = props.expenses[0].date;

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{props.expenses[0].title}</h2>
        <div className="expense-item__price">
          ${props.expenses[0].amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
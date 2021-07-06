import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const date = props.expenses.date;

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
        <div className="expense-item__price">
          ${props.expenses.amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
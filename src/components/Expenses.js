import './Expenses.css';
import ExpenseItem from './ExpenseItem';


function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem expenses={props.items[0]} />
      <ExpenseItem expenses={props.items[1]} />
      <ExpenseItem expenses={props.items[2]} />
    </div>
  );
}

export default Expenses;
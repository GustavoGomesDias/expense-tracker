import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={props.items[0]} />
      <ExpenseItem expenses={props.items[1]} />
      <ExpenseItem expenses={props.items[2]} />
    </Card>
  );
}

export default Expenses;
import React, { useState } from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [year, setYear] = useState('');

  const filterChangeHandler = (year) => {
    setYear(year);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={year}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) =>
        <ExpenseItem
          key={expense.id}    
          expenses={expense}
        />
      )}
    </Card>
  );
}

export default Expenses;
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

  /* My Solution */
  // const filterExpenses = () => {
  //   const arr = [];
  //   props.items.map((expense) => (expense.date.getFullYear().toString() === year ? arr.push(expense) : arr));

  //   return arr;
  // }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expenseContent = <p>No expenses foound.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) =>
      <ExpenseItem
        key={expense.id}
        expenses={expense}
      />
    )
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={year}
        onChangeFilter={filterChangeHandler}
      />

      {year !== '' ? expenseContent : props.items.map((expense) =>
        <ExpenseItem
          key={expense.id}
          expenses={expense}
        />
      )}
    </Card>
  );
}

export default Expenses;
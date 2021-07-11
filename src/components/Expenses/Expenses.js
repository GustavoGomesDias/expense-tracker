import React, { useState } from 'react';
import './Expenses.css';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';

function Expenses(props) {
  const [year, setYear] = useState('2020');

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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={year}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
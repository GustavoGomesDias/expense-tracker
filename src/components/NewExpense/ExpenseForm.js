import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [addExpense, setAddExpense] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  let expensesForm = <div className="new-expense__actions">
    <button type="button" onClick={() => setAddExpense(true)}>Add Expense</button>
  </div>

  if (addExpense) {
    expensesForm = <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2040-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setAddExpense(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  } else {
    expensesForm = <div className="new-expense__actions">
    <button type="button" onClick={() => setAddExpense(true)}>Add Expense</button>
  </div>
  }

  return expensesForm;
}

export default ExpenseForm;

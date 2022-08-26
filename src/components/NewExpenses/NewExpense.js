import React, { useState } from "react";

import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

    const [toggleFormHandler, setToggleFormHandler] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setToggleFormHandler(false);
    }

    const openFormHandler = () => {
        setToggleFormHandler(true);
    }

    const closeFormHandler = () => {
        setToggleFormHandler(false);
    }

    return (
        <div className="new-expense">
            {!toggleFormHandler && <button type="button" onClick={openFormHandler}>Add New Expense</button>}
            {toggleFormHandler && <NewExpenseForm
                onSaveExpensedata={saveExpenseDataHandler}
                onCancle={closeFormHandler}
            />}
        </div>
    );
}
export default NewExpense;
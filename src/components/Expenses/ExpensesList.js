import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback ">No Data Found!!</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map(items => {
                return (
                    <ExpenseItem
                        key={items.id}
                        title={items.title}
                        amount={items.amount}
                        date={items.date}
                    />);
            })}
        </ul>
    )
}

export default ExpensesList;
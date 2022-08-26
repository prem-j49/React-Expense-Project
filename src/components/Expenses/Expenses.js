import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {

    const [filterData, setFilterData] = useState('2020');

    const filterHandler = (selectedFilterValue) => {
        console.log(selectedFilterValue);
        setFilterData(selectedFilterValue);
    }

    const filterExpenseData = props.expenses.filter(expenseItems => {
        return (expenseItems.date.getFullYear().toString() === filterData);
    })

    return (
        <Card className="expenses">
            <ExpenseFilter
                selectedYear={filterData}
                onFilterChange={filterHandler}
            />
            <ExpensesChart expenses={filterExpenseData}/>
            <ExpensesList items={filterExpenseData} />
        </Card>
    );
}

export default Expenses;
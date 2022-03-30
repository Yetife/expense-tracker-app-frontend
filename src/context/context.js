import React, {useReducer, createContext } from 'react';
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) ||  [{"amount":2000,"category":"Clothes","type":"Expense","date":"2022-03-30","id":"94efe74a-397c-4473-92c6-2af3b95a3895"},{"amount":5000,"category":"Deposits","type":"Income","date":"2022-03-15","id":"f4a81708-9e89-48f9-8e8f-2864e23d0aec"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    const balance = transactions.reduce((accumulator, currentValue) => {
        return(currentValue.type === 'Expense' ? accumulator - currentValue.amount : accumulator + currentValue.amount)
    }, 0)

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
import React, { useState, useContext } from 'react'
import './Transaction.css'

// Context Import
import { TransactionContext } from '../../context/TransactionContext'

export const Transaction = () => {
    const { transactions, addTransaction } = useContext(TransactionContext)
    const [text, setText] = useState('')
    const [money, setMoney] = useState('')

    const newTransaction = () => {
        addTransaction({
            id: transactions.length,
            name: text,
            amount: +money
        })

        setText('')
        setMoney('')
    }

    return (
        <div className="transactionBlock sectionBlock">
            <h2>Transaction</h2>

            <label htmlFor="transactionText">
                Text
            </label>
            <input type="text" name="transactionText" id="transactionText" placeholder="Text..." value={ text } onChange={ e => setText(e.target.value) } autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />

            <label htmlFor="transactionMoney">
                Amount
            </label>
            <input type="number" name="transcationMoney" id="transactionMoney" placeholder="Amount..." value={ money } onChange={ e => setMoney(e.target.value) }/>

            <button onClick={ e => newTransaction() }>Add Transaction</button>
        </div>
    )
}

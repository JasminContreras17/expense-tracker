import React from 'react'

const Transaction = ({transactions}) => {
    const sign = transactions.amount < 0 ? '-' : '+';

  return (
    <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
        {transactions.text} <span>-{sign}${Math.abs(transactions.amount)}</span><button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction

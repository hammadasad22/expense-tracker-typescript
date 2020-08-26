import React from 'react';


function Transaction({ transaction }: {transaction: {id: number, text: string, amount: number}}) {
    return (
            <li className="minus">
          {transaction.text}<span>-$400</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction

import PropTypes from "prop-types";
import React from "react";

import css from "./transaction.module.css"

const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  
   {items.map(item => (
   <tr key={item.id}>
      <td>{item.type}</td>
      <td>{Math.round(item.amount)}</td>
      <td>{item.currency}</td>
    </tr>
    ))} 
 
  </tbody>
</table>
    )

}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
}))

}

export default TransactionHistory;
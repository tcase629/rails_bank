import React from 'react';
import Navbar from './Navbar';

const Accounts = ({ accounts, user }) => {
  const { first_name, last_name } = user
  return (
    <>
      <Navbar />
      <h1>{first_name} {last_name}'s Accounts</h1>
      <div className="collection">
        {
          accounts.map( (account) => (
            <a href={`/accounts/${account.id}`} className="collection-item">
              {account.account_name} - ${account.balance}
            </a>
          ))
        }
      </div>
    </>
  )
}

export default Accounts;
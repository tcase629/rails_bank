import React from 'react';
import Navbar from './Navbar';

const AccountNew = ({ account, user }) => {
  const { account_name, balance } = account 
  const defaultAccountName = account_name ? account_name : ""
  const defaultBalance = balance ? balance : 0.0
  return (
    <>
      <Navbar />
      <h1>New Account</h1>
      <form action="/accounts" method="post">
        <input type="hidden" name="account[user_id]" value={user.id} />
        <input
          type="text"
          defaultValue={defaultAccountName}
          name="account[account_name]"
          required
          placeholder="name"
        />
        <input
          type="number"
          defaultValue={defaultBalance}
          name="account[balance]"
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AccountNew;
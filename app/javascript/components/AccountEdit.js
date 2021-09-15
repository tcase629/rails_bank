import React from 'react';
import Navbar from './Navbar';

const AccountEdit = ({ account, user }) => {
  const { account_name, balance, id } = account 
  const defaultAccountName = account_name ? account_name : ""
  const defaultBalance = balance ? balance : 0.0
  return (
    <>
      <Navbar />
      <h1>Edit Account</h1>
      <form action={`/accounts/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
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
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default AccountEdit;
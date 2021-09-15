import React from 'react';
import Navbar from './Navbar';

const Account = ({ account, user }) => {
  const { account_name, balance, id } = account
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems, options);
  // });
  return (
    <>
      <Navbar />
      <h1>{account_name}</h1>
      <p>${balance}</p>
      <a href={`/accounts/${id}/edit`}>Edit</a>
      <br />
      <a 
        href={`/accounts/${id}`} 
        data-method="delete"
      >
        Delete
      </a>
      {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Delete</a>

      <div id="modal1" className="modal">
        <div class="modal-content">
          <h4>Are you sure you want to DELETE?</h4>
          <p>There is no going back</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">No</a>
          <a 
            href={`/accounts/${id}`} 
            data-method="delete"
          >
            Yes
          </a>
        </div>
      </div> */}
    </>
  )
}

export default Account;
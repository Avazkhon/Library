import React from 'react';

import FormAuthorization from './contentComponents/formAuthorization';
import CartMODS from './contentComponents/CartMODS'

function Content (props) {
  let obj = {
  	submit: props.handleSubmit,
  	handleChangeFormUser: props.handleChangeFormUser,
    array: [
      {
        apiItemDetailURL: "",
        apiItemURL: "",
        apiUri: "",
        itemLink: "",
        rightsStatementURI: ""
      }
    ]
  }

   return (
    <div className="content text-center">
  	  <CartMODS array={props.obj.array}/>
  	</div>
  	)
  }

export default Content

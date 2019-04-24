import React from 'react';

import FormAuthorization from './contentComponents/formAuthorization';
import CartMODS from './contentComponents/CartMODS'

function Content (props) {
  let obj = {
  	handleChangeFormUser: props.handleChangeFormUser,
    handleGetRequestItemsMods: props.handleGetRequestItemsMods,
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
  	  <CartMODS
        array={props.obj.array}
        handleGetRequestItemsMods={props.handleGetRequestItemsMods}
      />
  	</div>
	)
}

export default Content

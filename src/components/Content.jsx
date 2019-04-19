import React from 'react';

import FormAuthorization from './contentcomponents/formAuthorization'

function Content (props) {
  let obj = {
	submit: props.handleSubmit,
	handleChangeFormUser: props.handleChangeFormUser,
	user: {
	  nickname: props.obj.user.nickname,
	  password: props.obj.user.password	
	}
  }

   return (
    <div className="content text-center">
  	  <FormAuthorization obj={props} />
  	</div>
  	)
  }


export default Content
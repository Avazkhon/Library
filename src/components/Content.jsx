import React from 'react';

import FormAuthorization from './contentComponents/formAuthorization';
import CartMODS from './contentComponents/CartMODS';
import ComponentItemsMods from './contentComponents/componentItemsMods'

function Content (props) {
  let obj = {
  	handleChangeFormUser: props.handleChangeFormUser,
    handleGetRequestItemsMods: props.handleGetRequestItemsMods,
    stateComponents: props.obj.stateComponents,
    array: props.obj.array
  }

  if(obj.stateComponents == "CartMODS") {
    return (
      <div className="content text-center">
        <CartMODS
          array={obj.array}
          handleGetRequestItemsMods={props.handleGetRequestItemsMods}
        />
      </div>
    )
  }

  if(obj.stateComponents == "ComponentItemsMods") {
    return (
      <ComponentItemsMods />
    )
  }

  return (
    <div></div>
  )
}

export default Content

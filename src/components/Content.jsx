import React from 'react';

import FormAuthorization from './contentComponents/formAuthorization';
import CartMODS from './contentComponents/CartMODS';
import ComponentItemsMods from './contentComponents/componentItemsMods';

function Content(props) {
  const obj = {
    handleSubmit: props.handleSubmit,
  	handleChangeFormUser: props.handleChangeFormUser,
    handleGetRequestItemsMods: props.handleGetRequestItemsMods,
    stateComponents: props.obj.stateComponents,
    array: props.obj.array,
    itemsMods: props.obj.itemsMods,
    user: props.obj.user,
    loginStatus: props.obj.loginStatus,
  };

  if (obj.stateComponents === 'CartMODS') {
    return (
      <div className="content text-center">
        <CartMODS
          array={obj.array}
          handleGetRequestItemsMods={props.handleGetRequestItemsMods}
        />
      </div>
    );
  }

  if (obj.stateComponents === 'ComponentItemsMods') {
    return (
      <div className="content text-center">
        <ComponentItemsMods itemsMods={obj.itemsMods} />
      </div>
    );
  }

  if(!obj.loginStatus) {
    return (
      <FormAuthorization
        user={obj.user}
        handleSubmit={obj.handleSubmit}
        handleChangeFormUser={obj.handleChangeFormUser}
      />
    );
  }

  return (
    <div className="content text-center backgroundContent"></div>
  );
}

export default Content;

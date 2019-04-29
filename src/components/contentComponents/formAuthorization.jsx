import React from 'react';

function FormAuthorization(props) {
  const obj = {
    submit: props.handleSubmit,
    handleChangeFormUser: props.handleChangeFormUser,
    user: {
  	  nickname: props.user.nickname,
  	  password: props.user.password,
    },
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          name="nickname"
          className="form-control"
          id="nickname"
          placeholder="Enter nickname"
          defaultValue={obj.user.nickname}
          onChange={obj.handleChangeFormUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          defaultValue={obj.user.password}
          onChange={obj.handleChangeFormUser}
        />
      </div>
      <input type="button" className="btn btn-primary" defaultValue="sibmit" onClick={obj.submit} />
    </form>
  );
}

export default FormAuthorization;

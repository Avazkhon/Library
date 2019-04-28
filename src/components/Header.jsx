import React from 'react';

function Header(props) {
  const obj = {
    handleGetRequest: props.handleGetRequest,
    handleChangeSearchText: props.handleChangeSearchText,
    messages: props.messages,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="#">
        <img className="logoMain" src="https://avatars3.githubusercontent.com/u/944604?s=200&v=4" alt="logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <input className="btn btn-primary" type="button" value="Home" />
          </li>
        </ul>
        <div className="messages">
          <h3>{obj.messages}</h3>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={obj.handleChangeSearchText} />
          <input type="button" value="Search" className="btn btn-outline-success my-2 my-sm-0" onClick={obj.handleGetRequest} />
        </form>
      </div>
    </nav>
  );
}


export default Header;

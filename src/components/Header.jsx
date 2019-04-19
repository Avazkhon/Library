import React from 'react';

function Header (props) {
	let obj = {
		logIn: props.obj,
		handleGetRequest: props.handleGetRequest
	}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" >
        <img className="logoMain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ViS_CpkMuojQvhTb_WIAPBErBwxOZDi4QHidzMZHdkQAIRcC" alt="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
           <input className="btn btn-primary"  type="button" value="Home" />
          </li>
		    {obj.logIn ? null : <li className="nav-item active">
		    <input className="btn btn-success"  type="button" value="log in" />
          </li>}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <input type= "button" value="Search" className="btn btn-outline-success my-2 my-sm-0" onClick={obj.handleGetRequest} />
        </form>
	  </div>
    </nav>
  )
}


export default Header
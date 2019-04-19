import React from 'react';

import './styles/styleApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Content from './components/Content';

import getRequest from './xhrComponents/getRequest'

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      logIn: false,
      user: {
        nickname: "",
        password: ""
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFormUser = this.handleChangeFormUser.bind(this);
    this.handleGetRequest= this.handleGetRequest.bind(this);
  }


  handleSubmit() {
  	this.setState({logIn: !this.state.logIn})
  }


  handleChangeFormUser(e) {
    let name = e.target.name;
    let value = e.target.value
    console.log(e.target.name)
    this.setState((state)=>{
      state.user[name] = value
    })
  }

  // button search 
  handleGetRequest() {
    getRequest("text", (array)=>{console.log(array)})
  }


  render() {
  	return (
  	  <div className="app text-center">
  		<Header
        obj={this.state.logIn}
        handleGetRequest={this.handleGetRequest}

      />
  		<Content
  		  obj={this.state}
  		  handleSubmit={this.handleSubmit}
        handleChangeFormUser={this.handleChangeFormUser}  />
  	  </div>
  	)
  }
}

export default App
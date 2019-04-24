import React from 'react';

import './styles/styleApp.css';
import './styles/CartMODS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Content from './components/Content';

import getRequest from './xhrComponents/getRequest';
import getRequestItemsMods from './xhrComponents/getRequestItemsMods';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      searchText: "",
      stateComponents: "",
      array: []
    }

    this.handleChangeFormUser = this.handleChangeFormUser.bind(this);
    this.handleGetRequest = this.handleGetRequest.bind(this);
    this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
  }

  // it is handle not active
  handleChangeFormUser(e) {
    let name = e.target.name;
    let value = e.target.value

    this.setState((state)=>{
      state.user[name] = value
    })
  }

  // button search 
  handleGetRequest() {
    getRequest(this.state.searchText, (obj)=>{
      let array = obj.nyplAPI.response.result;

      this.setState({array: array, stateComponents: "CartMODS"})
    })
    console.log(this.state.stateComponents)
  }

  handleChangeSearchText (e) {
    let text = e.target.value;

    this.setState((item)=>{
      // text search default "cats"
      item.searchText = text;
    })
  }

  handleGetRequestItemsMods (uuid) {
    getRequestItemsMods(uuid, (mods)=>{
      console.log("mods", mods);
      this.setState({stateComponents: "ComponentItemsMods"})
    })
  }


  render() {
  	return (
  	  <div className="app text-center">
  		<Header
        obj={this.state.logIn}
        handleGetRequest={this.handleGetRequest}
        handleChangeSearchText={this.handleChangeSearchText}
      />

  		<Content
  		  obj={this.state}
        handleChangeFormUser={this.handleChangeFormUser}
        handleGetRequestItemsMods={this.handleGetRequestItemsMods.bind(this)}
      />
  	  </div>
  	)
  }
}

export default App
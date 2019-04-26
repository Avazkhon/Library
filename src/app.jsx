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
      array: [],
      Messages: ""
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
      
      // check for correct answer
      if(array !== undefined) {
        this.setState({array: array, stateComponents: "CartMODS"})
      }
      else {
        this.setState({Messages: "Your search returned no results!"})
        setTimeout(()=>{
          this.setState({Messages: ""})
        }, 3000)
      }
    })
  }

  handleChangeSearchText (e) {
    let text = e.target.value;

    this.setState((item)=>{
      // text search default "cats"
      item.searchText = text;
    })
  }
  
  handleGetRequestItemsMods (uuid) {
    getRequestItemsMods(uuid, (itemsMods)=>{
      let mods = itemsMods.nyplAPI.response;

      this.setState({stateComponents: "ComponentItemsMods", itemsMods: mods })
    })
  }


  render() {
  	return (
  	  <div className="app text-center">
    		<Header
          Messages={this.state.Messages}
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
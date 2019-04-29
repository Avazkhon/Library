import React from 'react';

import './styles/styleApp.css';
import './styles/CartMODS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Content from './components/Content';

import getRequest from './xhrComponents/getRequest';
import getRequestItemsMods from './xhrComponents/getRequestItemsMods';

const userLocalStorge = JSON.parse(localStorage.getItem('user'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      stateComponents: '',
      array: [],
      messages: '',
      loginStatus: userLocalStorge ? true : false,
      user: {
        nickname: userLocalStorge ? userLocalStorge.nickname : '',
        password: userLocalStorge ? userLocalStorge.password : '',
      },
    };

    this.handleExitAndeLoginStatus = this.handleExitAndeLoginStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFormUser = this.handleChangeFormUser.bind(this);
    this.handleGetRequest = this.handleGetRequest.bind(this);
    this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
    this.handleGetRequestItemsMods = this.handleGetRequestItemsMods.bind(this);
  }

  handleExitAndeLoginStatus() {
    this.setState({ loginStatus: false });
    localStorage.clear();
  }

  handleSubmit() {
    // eslint-disable-next-line prefer-destructuring,react/destructuring-assignment
    const user = this.state.user;
    const text = '';
    getRequest({text, user}, (obj) => {
      if (obj.nyplAPI.response.headers.code === '200') {
        // eslint-disable-next-line no-undef
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ loginStatus: true });
      }
    });
  }

  // it is handle not active
  handleChangeFormUser(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState((state) => {
      state.user[name] = value;
    });
  }

  // button search ;
  handleGetRequest() {
    const user = this.state.user;
    const text = this.state.searchText;
    getRequest({text, user}, (obj) => {
      let array = obj.nyplAPI.response.result;

      // check for correct answer
      if (array !== undefined) {
        this.setState({ array: array, stateComponents: 'CartMODS' });
      }
      else {
        this.setState({ messages: 'Your search returned no results!' });
        setTimeout(() => {
          this.setState({ messages: '' });
        }, 3000);
      }
    });
  }

  handleChangeSearchText(e) {
    let text = e.target.value;

    this.setState((item) => {
      // text search default "cats";
      item.searchText = text;
    });
  }

  handleGetRequestItemsMods(uuid) {
    const user = this.state.user;
    getRequestItemsMods({ uuid, user }, (itemsMods) => {
      let mods = itemsMods.nyplAPI.response;

      this.setState({ stateComponents: 'ComponentItemsMods', itemsMods: mods });
    });
  }

  render() {
    return (
      <div className="app text-center">
        <Header
          loginStatus={this.state.loginStatus}
          messages={this.state.messages}
          handleGetRequest={this.handleGetRequest}
          handleChangeSearchText={this.handleChangeSearchText}
          handleExitAndeLoginStatus={this.handleExitAndeLoginStatus}
        />
        <Content
          obj={this.state}
          handleSubmit={this.handleSubmit}
          handleChangeFormUser={this.handleChangeFormUser}
          handleGetRequestItemsMods={this.handleGetRequestItemsMods}
        />
      </div>);
  }
}

export default App;

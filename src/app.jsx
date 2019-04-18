import React from 'react';

import './styles/styleApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'

function App () {
  return (
    <div className="app text-center col">
	  <div className="row-12">
	  	<Header />
	  </div>	
    </div>
  )
}

export default App
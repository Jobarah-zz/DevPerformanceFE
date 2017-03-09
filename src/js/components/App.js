import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

class App extends Component {
	render() {
		return(
      <div className='navbar-wrap'>
				<NavBar></NavBar>
			</div>
		)
	}
}

export default App;

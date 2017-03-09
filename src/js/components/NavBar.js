import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavBar extends Component {
	render() {
		return(
			<div className='navbar'>
				<span className='icon-wrapper'><img src='/src/img/DPA-icon.png' /></span>
				<header>
					DPA
					<span>Tool</span>
				</header>
				<button />
			</div>
		);
	}
}

export default NavBar;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavBar extends Component {

	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.state = { toggle: 'uncollapsed' };
	}

	toggle() {
		if(this.state.toggle == 'uncollapsed') {
			this.setState({ toggle: 'collapsed' });
		}
		else {
			this.setState({ toggle: 'uncollapsed' });
		}
	}

	render() {
		return(
			<div className='navbar'>
				<span className='icon-wrapper'><img src='/src/img/DPA-icon.png' /></span>
				<header>
					DPA
					<span>Tool</span>
				</header>

				<div className={this.state.toggle} onClick={() => this.toggle()}>
				  <div className='bar1'></div>
				  <div className='bar2'></div>
				  <div className='bar3'></div>
				</div>
			</div>
		);
	}
}

export default NavBar;
import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<div>
				<nav className="ink-navigation">
				    <ul className="menu horizontal black">
				        <li><a href="#">Google News</a></li>
				    </ul>
				</nav>
			</div>
		);
	}
}

export default Header;
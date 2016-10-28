import React, { Component } from 'react';
import Grid from './Grid';

class Body extends Component{
	render(){
		return(
			<section>
				<span><h3>Top Stories</h3></span>
				<Grid/>
			</section>
		);
	}
}

export default Body;
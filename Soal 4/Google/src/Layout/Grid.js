import React, { Component } from 'react';
//import Request from 'superagent';

class Grid extends Component{

	constructor(props) {
	  super(props);

	  this.dataJSON = [];
	  this.image = [];
		
	}
	componentDidMount(){
		// fetch('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=8&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss', {
		// 	method: 'get',
		// 	mode: 'no-cors',
		// 	headers: {
		// 	    "Accept": "application/json"
		// 	  }
		// }).then(function(response) {
		// 	return response.json();
		// }).then(function(data) {
		// 	console.log(data);
		// })
		let self = this;
		
		fetch('/news.json', {
			method: 'get'
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			self.dataJSON = data.responseData.feed.entries;

			for(let i=0; i<self.dataJSON.length; i++){
				self.image.push(self.dataJSON[i].content);
			}
			self.forceUpdate();
		});


	}

	render(){
		
		return(
			<div className="ink-grid">
				<div className="column-group half-gutters">
				{
					this.dataJSON.map((v,k)=>{
						let parser = new DOMParser();
						let el = parser.parseFromString(this.image[k], 'text/xml');

						let src = el.getElementsByTagName('img')[0].getAttribute('src');
						console.log(src)
						return(
							<div className="all-33" key={k}>
						    	<div className="news-feed">
						    		<div className="news-image">
						    			<img src={src} alt={'feed-'+k} height="150" width="150"/>
						    		</div>
						    		<a href={v.link} target="_blank">{v.title}</a>
						    		<span>{v.publishedDate}</span>
						    	</div>
						    </div>
						)
					})
				}
					
				</div>
			</div>
		);
	}
}

export default Grid;
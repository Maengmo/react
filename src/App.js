import React, { Component } from 'react';
import Header from './js2/step4/Header';
import Content from './js2/step4/Content';
import './css/jquery.css';

class App extends Component {
	render(){
		return(
			<div className="wrap">
				<Header />
				<Content />
			</div>
		);
	}
}

export default App;
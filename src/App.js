import React, { Component } from 'react'
import './App.css';

class App extends Component {;
    constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Php", votes: 0},
				{name: "Python", votes: 0},
				{name: "Go", votes: 0},
				{name: "Java", votes: 0}
			]
		}
	}

	

  render() {
    return (
       <div></div>
    )
}
}

export default App;

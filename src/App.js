import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [
			{ name: 'arun', age: 24 },
			{ name: 'joshi', age: 25 },
			{ name: 'raka', age: 2 }
		]
	}

	handleSwap = (e) => {

		let names = [];
		names.push(this.state.persons[1])
		names.push(this.state.persons[0])

		this.setState({

			persons: names
		})
	}

	onChangeHandler = (e) => {
		let names = [...this.state.persons];
		names[0].name = e.target.value;
		this.setState({
			persons: names
		})
	}

	render() {
		return (
			<div>

				<h1>hello react App</h1>
				<input type="button" value="swap names" onClick={ this.handleSwap } />


				<div className="persons"> { this.state.persons.map(person => {
					return <Person name={ person.name } age={ person.age } onChangeHandler={ this.onChangeHandler } />
				}) } </div>



			</div>
		);
	}
}

export default App;

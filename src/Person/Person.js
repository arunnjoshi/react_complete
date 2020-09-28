import React, { Component } from 'react';
import './person.css'
const person = (props) => {
	
	return (
		<div className='person'>
			<h1>
				Iam from {props.name} Component {props.age} year old
			</h1>
			<input type='text' onChange={props.onChangeHandler} />
		</div>
	);
};

export default person;

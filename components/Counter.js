import React, { Component } from 'react';

class Counter extends Component {
	state = { value: this.props.quantity };

	increment = (e) => {
    	this.setState(prevState => ({
      	value: prevState.value + 1
    	}));
		e.preventDefault();
  	};

	decrement = (e) => {
		e.preventDefault();
		if(this.state.value <= 1){
			return this.state.value;
		}
		else{
			this.setState(prevState => ({
				value: prevState.value - 1
			}));
		}
	};
	feed = (e) =>{
		this.setState({
			value: this.refs.feedQty.value
		}, function(){
			console.log(this.state.value)
		})
	};
	render() {
		return (
			<div className="stepper-input">
				<a href="#" className="decrement" onClick={this.decrement}>-</a>
				<input ref="feedQty" type="number" className="quantity" value={this.state.value} onChange={this.feed} />
				<a href="#" className="increment" onClick={this.increment}>+</a>
			</div>
		)
	}
}

export default Counter;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
	state = { value: this.props.productQuantity };

	increment = (e) => {
    	this.setState(prevState => ({
      	value: Number(prevState.value) + 1
    	}), function(){
				this.props.updateQuantity(this.state.value);
		});
		e.preventDefault();
  	};

	decrement = (e) => {
		e.preventDefault();
		if(this.state.value <= 1){
			return this.state.value;
		}
		else{
			this.setState(prevState => ({
				value: Number(prevState.value) - 1
			}), function(){
				this.props.updateQuantity(this.state.value);
			});
		}
	};

	feed = (e) =>{
		this.setState({
			value: this.refs.feedQty.value
		}, function(){
				this.props.updateQuantity(this.state.value);
		})
	};


	render() {
		return (
			<div className="stepper-input">
				<a href="#" className="decrement" onClick={this.decrement}>&ndash;</a>
				<input ref="feedQty" type="number" className="quantity" value={this.state.value} onChange={this.feed.bind(this)} />
				<a href="#" className="increment" onClick={this.increment}>&#43;</a>
			</div>
		)
	}
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
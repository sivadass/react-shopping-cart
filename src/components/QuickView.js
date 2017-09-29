import React, {Component} from 'react';

class QuickView extends Component{
	constructor(props){
		super(props);
	}

    render(){
        return(
            <div className={this.props.openModal ? "modal-wrapper active" : "modal-wrapper"}>
                <div className="modal">
                    <button type="button" className="close" onClick={this.props.closeModal}>&times;</button>
                    <div className="quick-view">
                        <div className="quick-view-image"><img src={this.props.product.image} alt={this.props.product.name}/></div>
                        <div className="quick-view-details">
                            <span className="product-name">{this.props.product.name}</span>
                            <span className="product-price">{this.props.product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickView;
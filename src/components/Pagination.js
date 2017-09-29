import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class Pagination extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="pagination">
                <a className="page current-page" href="#">1</a>
                <a className="page" href="#">2</a>
                <a className="page" href="#">3</a>
                <a className="page" href="#">4</a>
            </div>
        )
    }
}

export default Pagination;
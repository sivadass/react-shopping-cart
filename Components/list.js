import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListItem from './list-item';

class List extends Component{
  constructor(){
    super();
  }
  render(){
    let listDatum;
    listDatum = this.props.listData.map(listDataItem =>{
        return(
            <ListItem title={listDataItem.title} key={listDataItem.title}/>
        )
    });
    return(
      <ul>
          {listDatum}
      </ul>
    )
  }
}

export default List;
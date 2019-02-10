import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemLista extends Component{
  
  static propTypes = {
  	items : 	PropTypes.array.isRequired,
  }
  
  render(){
    let {items} = this.props;
	
	return (
      <div>	
        <p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    	
    )
  }
}

export default ItemLista;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AddBtn from './AddBtn'


class InputItem extends Component{
  
  static propTypes = {
  	handleChange : 	PropTypes.func.isRequired,
    value : 		PropTypes.string.isRequired,
    addItem: 		PropTypes.func.isRequired,
    inputIsEmpty: 	PropTypes.func.isRequired
  }
  
  render(){
    let {handleChange,value,addItem,inputIsEmpty} = this.props;
	
	return (
      	<form onSubmit={addItem}>
          
          <input
              type="text"
              placeholder="Enter New Item"
              value={value}
              onChange={handleChange}
          />
          <AddBtn isEmpty={inputIsEmpty}>Add</AddBtn>
        </form>
    	
    )
  }
}

export default InputItem;
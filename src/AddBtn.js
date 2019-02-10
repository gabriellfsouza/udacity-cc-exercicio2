import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddBtn extends Component{
  
  static propTypes = {
  	handleClick : PropTypes.func,
    isEmpty : PropTypes.func.isRequired
  }
  
  render(){
    debugger;
  	let {isEmpty} = this.props;
    return(
    	<button disabled={isEmpty()} >Add</button>
    )
  }
}

export default AddBtn;

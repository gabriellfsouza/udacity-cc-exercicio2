import React from 'react';
import logo from './logo.svg';
import './App.css';

import InputItem from './InputItem';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';
import ItemLista from './ItemLista';


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
          
          <InputItem
			addItem={this.addItem}
			value={this.state.value} 
			handleChange={this.handleChange}
			inputIsEmpty={this.inputIsEmpty} />

		<DeleteBtn 
			deleteLastItem={this.deleteLastItem}
			noItemsFound={this.noItemsFound} />
        
        <ItemLista 
			items={this.state.items} />

      </div>
    );
  }
}

export default App;

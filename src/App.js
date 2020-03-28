import './App.css';

import React , { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {  
  constructor(){
    super();
    this.state = {
        monsters : [],
        searchFiled : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>
      response.json()).then(users => this.setState({monsters : users}))
  }
  
  render() { 
    const {monsters , searchFiled} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()))
    return ( 
    <div className="App">
      <h1>Monsters Rolodex </h1>
      <SearchBox
      placeholder='search monster'
      handelChange={e => this.setState({searchFiled : e.target.value})}
      />
      <CardList monsters={filterMonsters} />  
  </div> 
  );
  }
}
 
export default App;



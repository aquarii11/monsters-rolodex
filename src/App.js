import React,{Component} from 'react';
import CardList from './CardList';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Button from './Button';
class App extends Component{
  constructor()
  {
       super();
       this.state = {
           monsters:[],
           searchfield:''
       }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(users =>this.setState({monsters:users}))
  }
  onSearchChange =(event)=>
  {
      console.log(event.target.value)
      this.setState({searchfield:event.target.value})
  }
  onClick =() =>
  {
    console.log('Clicked Me')
  }
  render()
  {
    const FilterMonsters = this.state.monsters.filter(monster=>monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
      const {monsters} = this.state;
      return (
    <div className="App">
         <h1>Monsters-Rolodex</h1>
         <span><SearchBox onChange={this.onSearchChange} /><Button onClick={this.onClick} /></span>
        <Scroll>
           <CardList monsters={FilterMonsters}>
           </CardList>
        </Scroll>
         

    </div>
  );
  }

}

export default App;

import React, {Component} from 'react';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import ListaPeliculas from './components/ListaPeliculas';

class App extends Component{
    
  render(){
    return(
      <Switch>
         <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route path="/listaPeliculas" component={ListaPeliculas} ></Route>
       
      </Switch>
    ) 
  }
}

export default App;

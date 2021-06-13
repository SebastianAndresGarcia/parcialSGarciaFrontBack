import React, {Component} from 'react';
import Navigation from './Navigation';

class ListaPeliculas extends Component{
    
    render(){
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <h1>Listado de Peliculas</h1>
            </React.Fragment>
        );

    }
}

export default ListaPeliculas;
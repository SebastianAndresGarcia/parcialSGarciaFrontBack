import React, { Component } from 'react';
import Navigation from './Navigation';



class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                
                <h1 class="text-center">Bienvenido a Peliculas Online</h1>
                <div align="center">
                
                    <img src="./images/poster.jpg" alt=""/>
                
                </div>
            </React.Fragment>
        );

    }
}

export default Home;
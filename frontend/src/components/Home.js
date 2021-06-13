import React, { Component } from 'react';
import Navigation from './Navigation';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import { Link } from 'react-router-dom';


class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Card>
                
                <h1>Bienvenido a Peliculas Online</h1>
                    <Figure.Caption style={{ width: '30%' }}>
                        <Image src="./images/poster.jpg" className="img" />
                    </Figure.Caption>                  
                    
                </Card>
            </React.Fragment>
        );

    }
}

export default Home;
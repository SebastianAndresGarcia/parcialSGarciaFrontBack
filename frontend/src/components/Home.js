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

                    <Figure.Caption style={{ width: '30%' }}>
                        <Image src="./images/logo192.png" className="img" />
                    </Figure.Caption>

                    <h1>Nelflix</h1>
                    <p>Bienvenidos a Netflix</p>
                    <p><Link to="/ListaPeliculas">Listado de Películas</Link></p>

                </Card>
            </React.Fragment>
        );

    }
}

export default Home;
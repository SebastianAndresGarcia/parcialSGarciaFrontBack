import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import Navigation from './Navigation';
class DetallePelicula extends Component {

    constructor() {
        super();
        this.state = ({
            pelicula: [],
        });
    }
    componentDidMount() {
        this._isMounted = true;
        this.getSelectPeliPorId();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }



    getSelectPeliPorId() {
        const parametroId = this.props.match.params.id;

        fetch('http://localhost:3001/movies/detail/' + parametroId)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pelicula: responseJson });
            })

    }


    render() {

        const peliencontrada = this.state.pelicula

        return (<React.Fragment>
            <Navigation></Navigation>
           
            <Container>
                
              
                <h1>{peliencontrada.title}</h1>

                <br />
                <p>Rating: {peliencontrada.rating}</p>
                <p>Premios: {peliencontrada.awards}</p>
                <p>Duracion: {peliencontrada.length}</p>
                <p>Fecha de estreno: {peliencontrada.release_date}</p>
                <br />
                <section>

                    <Button className="botonVolver" href="/ListaPeliculas">
                        Volver al Listado
                    </Button>
                </section>

            </Container>
        </React.Fragment>

        );
    }
}
export default DetallePelicula  

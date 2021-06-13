import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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

    delete = (e) => {
        console.log(e)
        const parametroId = e

        fetch('http://localhost:3001/movies/delete/' + parametroId, {
            method: 'post',
            mode: 'cors',
            cache: 'default',

        }).then((response) => {
            if (response.status === 200) {
                alert('Pelicula eliminada')
                window.location.href = "/ListaPeliculas"
            }
        }).catch(e => console.log(e));

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
                    <Button className="botonModificar" href={`/Formulario/${peliencontrada.id}`}>
                        Modificar
                    </Button>

                    <Button className="botonBorrar" onClick={this.delete.bind(this, peliencontrada.id)}>
                        Borrar
                    </Button>
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

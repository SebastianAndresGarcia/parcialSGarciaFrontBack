import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tarjeta from './Tarjeta';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ListaPeliculas extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = ({
            db: [],
        });
    }
    // https://es.reactjs.org/docs/react-component.html#overview
    //Este método se invoca inmediatamente después de que un componente se monte 

    componentDidMount() {
        this._isMounted = true;
        this.getPeliculas();
    }

    //Este método es llamado cuando un componente se elimina del DOM
    componentWillUnmount() {
        this._isMounted = false;
    }
    getPeliculas() {
        fetch('http://localhost:3001/Movies')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ db: responseJson });
            });

    }

    render() {
        /* const peliculas = this.state.db.map((pelicula, i) => {
             return (
                 <Tarjeta key={pelicula.id} id={pelicula.id} pelicula={pelicula.title} lista='peliculas'></Tarjeta>
             )
         })
         return (<React.Fragment>
             <Navigation></Navigation>
             <Container fluid="md" >
                 <link rel='stylesheet' href='/css/style.css' />
                 
                 <Col >
                     <link rel='stylesheet' href='/css/style.css' />
                     <h1><b>Listado de peliculas</b></h1>
                     <br />
                     
                     <br />
                     <br />
 
                     <ul>
                         {peliculas}
                     </ul>
                 </Col>
             </Container >
         </React.Fragment>
         );  */
        const peliculas = this.state.db.map((pelicula, i) => {
            return (
                <Tarjeta key={pelicula.id} id={pelicula.id} pelicula={pelicula.title} lista='peliculas'></Tarjeta>
            )
        })

        return (
            <React.Fragment>
                <Navigation></Navigation>
                <br></br><section>
                    <Button className="btonAgregar" href={`/Formulario/0`}>
                        Agregar Pelicula
                    </Button>
                </section><br></br>
                <Container fluid="md">
                    <Row>
                        {peliculas}
                    </Row>
                </Container>
                <br></br>
            </React.Fragment>
        );

    }

}


export default ListaPeliculas;
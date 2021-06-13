import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Navigation extends Component{
    
    render(){
        return (
            <React.Fragment>
             <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/home">INICIO</Navbar.Brand>
              <Nav className="mr-auto">
               
                <Nav.Link href="/ListaPeliculas">LISTADO DE PELICULAS</Nav.Link>
                
              </Nav>
             
            </Navbar>
          </React.Fragment>
            
        );

    }
}

export default Navigation;
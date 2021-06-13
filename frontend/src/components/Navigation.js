import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Navigation extends Component{
    
    render(){
        return (
            <React.Fragment>
             <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/home">INICIO</Navbar.Brand>
              <Nav className="mr-auto">
               
                <Nav.Link href="/listaPeliculas">LISTADO DE PELICULAS</Nav.Link>
                
              </Nav>
             
            </Navbar>
          </React.Fragment>
            
        );

    }
}

export default Navigation;
// React && react-bootstrap
import React, {Component} from "react";
import {Grid, Row, Col, Well} from "react-bootstrap";

// react-confirm-alert === https://www.npmjs.com/package/react-confirm-alert
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

// Functions

const getHotel = (clase, port = 3000) => {
    fetch(`http://localhost:${port}/hoteles`, {
        method: 'GET'
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) => {
        console.log("Respuesta del servidor", respuestaJson);
        clase.setState({
            hoteles: respuestaJson
        })
    })
}

const deleteHotel = (clase, id, port = 3000) => {
    console.log('Se elimina un hotel');
    fetch(`http://localhost:${port}/hoteles/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        getHotel(clase, port);
    })
}

const modalDeleteAlert = (clase, id, port = 3000) => {
    confirmAlert({
        title: 'Eliminar hotel',
        message: '¿Esta seguro que desea eliminar este hotel?',
        buttons: [
          {
            label: 'Si',
            onClick: () => deleteHotel(clase, id, port)
          },
          {
            label: 'No'
          }
        ]
      })
}

// Render && export

class VerHoteles extends Component {
    state = {
        hoteles: []
    }
    
    componentDidMount() {
        getHotel(this);
    }
    
render() { 
    return(
        <div>
            <Grid>
                <Row className="show-grid">
                    {
                        this.state.hoteles.map((hotel, index) => {
                        let indice = index + 1
                            return(
                                <Col key={indice} xs={12} sm={6} md={4} lg={3}>
                                <Well bsSize="small">
                                    <img src={hotel.imagenUrl} alt={"Foto de:" + hotel.nombre} height="180" width="180"></img>
                                    <h2>{hotel.nombre}</h2>
                                    <p>{hotel.direccion}</p>
                                    <h4><small>{hotel.latitud} {hotel.longitud}</small></h4>
                                    <a onClick={() => modalDeleteAlert(this, hotel.id)}>Eliminar</a>
                                </Well> 
                                </Col>
                            )
                        })    
                    }
                </Row>
            </Grid>
        </div>
        ) 
    }
}


export default VerHoteles;
// React && react-bootstrap
import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Row, Col, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const writeDB = (clase, port = 3000) => {
    let valores = {
        nombre: clase.state.nombre,
        direccion: clase.state.direccion,
        latitud: clase.state.latitud,
        longitud: clase.state.longitud
    }
   if(clase.props.match.params.id) {
        fetch(`http://localhost:${port}/hoteles/${clase.props.match.params.id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
        .then(msg => msg.json())
        .then((msgJson) => {
            console.log('Datos insertador: ' ,msgJson)
            clase.setState({
                redirect: true
            })
        })
        .catch((error) => {
            console.log(error);
        })

    } else {
        fetch(`http://localhost:${port}/hoteles`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
        .then(() => {
            clase.props.history.push(`/hoteles/lista`);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}


// Render && export

class AgregarHotel extends Component {
    state = {
        nombre: '',
        direccion: '',
        latitud: '',
        longitud: '',
        imagenUrl: '',
        redirect: false
    }

    componentDidMount = (port = 3000) => {
        if(this.props.match.params.id){
            fetch(`http://localhost:${port}/hoteles/${this.props.match.params.id}`)
                .then(msg => msg.json())
                .then(msgJson => {
                    this.setState({
                        nombre: msgJson.nombre,
                        direccion: msgJson.direccion,
                        latitud: msgJson.latitud,
                        longitud: msgJson.longitud,
                        imagenUrl: msgJson.imagenUrl
                    })
                })
        }
    }


    render(){
        if(this.state.redirect) {
            return <Redirect to="/hoteles/lista"/>
        } else {        
            return(
                <div>
                    <Row>
                        <Col xs={12} md={8}>
                            <h2>Nuevo hotel</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <form>
                                <FormGroup>
                                    <ControlLabel>Nombre</ControlLabel>
                                    <FormControl type="text" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value})}/>
                                </FormGroup>
    
                                <FormGroup>
                                    <ControlLabel>Direccion</ControlLabel>
                                    <FormControl type="text" value={this.state.direccion} onChange={(event) => this.setState({direccion: event.target.value})}/>
                                </FormGroup>
    
                                <FormGroup>
                                    <ControlLabel>Latitud</ControlLabel>
                                    <FormControl type="text" value={this.state.latitud} onChange={(event) => this.setState({latitud: event.target.value})}/>
                                </FormGroup>
    
                                <FormGroup>
                                    <ControlLabel>Longitud</ControlLabel>
                                    <FormControl type="text" value={this.state.longitud} onChange={(event) => this.setState({longitud: event.target.value})}/>
                                </FormGroup>
    
                                <FormGroup>
                                    <ControlLabel>URL de la imagen</ControlLabel>
                                    <FormControl type="text" value={this.state.imagenUrl} onChange={(event) => this.setState({imagenUrl: event.target.value})}/>
                                </FormGroup>
                            </form>
                        </Col>         
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <ButtonToolbar>
                                <Button bsStyle="primary" onClick={() => writeDB(this)}>Guardar</Button>
                                <LinkContainer to="/hoteles/lista"><Button bsStyle="danger">Volver</Button></LinkContainer>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </div>
            )
        }
    }  
}

export default AgregarHotel;
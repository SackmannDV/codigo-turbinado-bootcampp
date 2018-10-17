import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Grid, Row, Col} from "react-bootstrap";
// Import components
import AgregarHotel from "./componentes/AgregarHotel";
import Home from "./componentes/Home";
import Navegador from "./componentes/Navegador";
import VerHoteles from "./componentes/VerHoteles";

// HTML

const AppHTML = (
    <Router>
        <div>
            <Navegador />
            <Grid>
                <Row>
                    <Col md={12}>
                    <Route exact path="/" component={Home} />
                    <Route path="/hoteles/lista" component={VerHoteles} />
                    <Route path="/hoteles/nuevo" component={AgregarHotel} />
                    <Route path="/hoteles/editar/:id" component={AgregarHotel} />
                    </Col>
                </Row>
            </Grid>
        </div>
    </Router>
)

// Render && export

class App extends Component {
    render() { return(AppHTML) }
}

export default App;
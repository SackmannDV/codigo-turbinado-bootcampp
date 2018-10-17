// React && react-bootstrap
import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";

// Render && export

class Home extends Component {
    render() {
        return(
            <div>
                <Jumbotron>
                    <h1>Esta es una app hecha con React y express</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt excepturi iste quas ullam reiciendis tempore ratione iure eligendi exercitationem mollitia ducimus totam, repellat harum repudiandae. Sequi voluptatem cumque nulla debitis.
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Home
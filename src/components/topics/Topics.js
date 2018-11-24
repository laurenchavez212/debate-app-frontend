import React, { Component } from "react";
import TopicList from "./TopicList";
import { Row, Container } from "reactstrap";

class Topics extends Component {

    render() {
        return <div>
            <div>
                <div>
                    <h1>Topics</h1>
                </div>
                <Container>
                    <Row>
                        <TopicList />
                    </Row>
                </Container>
            </div>
        </div>;
    }
}

export default Topics;

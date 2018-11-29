import React, { Component } from "react";
import { Input, Row, Col } from "reactstrap";
import "../App.css";

class SearchBar extends Component {
  searchTopics() {
    console.log("searchTopics: ", this.state.term);
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={{size:6, offset:3}}>
            <Input
              className="search-bar"
              value={this.props.topics}
              type="text"
              onChange={event => this.props.updateTerm(event.target.value)}
              placeholder={"Filter for what you're looking for..."}
              autoFocus
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import "../App.css";
import TopicList from "./topics/TopicList";
import SearchBar from "./SearchBar";

import NewTopicForm from "./topics/NewTopicForm";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }



  updateState = term => {
    this.setState({
      term: term
    });
  };

  render() {
    return <div className="homeContainer">
        <SearchBar term={this.state.term} updateTerm={this.updateState} />
        <div>
          <h1>Trending Topics</h1>
            <NewTopicForm  />
          <TopicList term={this.state.term} />
        </div>
      </div>;
  }
}


export default Home;

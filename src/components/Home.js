import React, { Component } from "react";
import "../App.css";
import TopicList from "./topics/TopicList";
import SearchBar from "./SearchBar";
import "../App.css";
import { Parallax } from "react-parallax";

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
        <Parallax className="top-banner" blur={{ min: -15, max: 15 }} bgImage={"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/04/two_million_stars_in_our_galaxy/16899659-1-eng-GB/Two_million_stars_in_our_Galaxy.jpg"} bgImageAlt="the dog" strength={-200}>
          <div className="top-banner-header">
            <div>
              <h1>Access Both Sides of the Conversation</h1>
            </div>
            <div>
              <h3>You make the decision</h3>
            </div>
          </div>
        </Parallax>

        <SearchBar term={this.state.term} updateTerm={this.updateState} />
        <div className="topics-list-container">
          <h1>Trending Topics</h1>
          <NewTopicForm />
            <TopicList term={this.state.term} />
        </div>
      </div>;
  }
}

export default Home;

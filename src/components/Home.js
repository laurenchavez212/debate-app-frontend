import React, { Component } from "react";
import "../App.css";
import TopicList from "./topics/TopicList"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    updateState = (term) => {
        this.setState({
            term: term
        })
    }

    render() {
        return <div className="homeContainer">
            <SearchBar term={this.state.term} updateTerm={this.updateState} />
            <div>
              <h1>Trending Topics</h1>
              <Link to="/topics/new">
                <button>Add a Topic</button>
              </Link>
                <TopicList term={this.state.term}/>
            </div>
          </div>;
    }
}


export default Home;

import React, { Component } from 'react';
import { Input } from 'reactstrap'
import "../App.css";


class SearchBar extends Component {

    searchTopics() {
        console.log('searchTopics: ', this.state.term);
    }


    render() {
        return <div>
            <Input className="search-bar" value={this.props.topics} type="text" onChange={event => this.props.updateTerm(event.target.value)} placeholder={`Filter for what youre looking for here...`}  autoFocus />
          </div>;
    }
}

export default SearchBar;
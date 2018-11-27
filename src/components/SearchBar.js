import React, { Component } from 'react';
import { Input } from 'reactstrap'

class SearchBar extends Component {


    render() {
        return <div>
            <Input value={this.props.topics} type="text" onChange={event => this.props.updateTerm(event.target.value)} placeholder="Filter for what you're looking for here..." autoFocus />
        </div>;
    }
}

export default SearchBar;
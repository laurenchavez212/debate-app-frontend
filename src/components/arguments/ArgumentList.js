import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getArguments } from "../../redux/actions/argumentActions"
import { connect } from 'react-redux';
import ArgumentItem from "./ArgumentItem"
import { Row } from "reactstrap";

class ArgumentList extends Component {

    componentDidMount() {
        console.log("mounted here", this.props)
        this.props.getArguments();
    }

    render() {
        console.log('arguments props in list', this.props.arguments)
        if (this.props.arguments) {
            return <div className="argumentsContainer">
                <Row>
                  {this.props.arguments.map(argument => (
                    <ArgumentItem
                      key={argument.id}
                      argument={argument}
                    />
                  ))}
                </Row>
              </div>;
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = state => {
    console.log('state in mstp', state)
    return {
        arguments: state.arguments.data
    };
};

export default connect(mapStateToProps, { getArguments })(ArgumentList);

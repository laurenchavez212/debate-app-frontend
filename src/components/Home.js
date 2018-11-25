import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Topics from "./topics/Topics"


class Home extends Component {

    render() {
        return <div className="homeContainer">

            <div>
                <Topics />
            </div>


        </div>;
    }
}


export default Home;

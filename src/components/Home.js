import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import Topics from "./topics/Topics"


class Home extends Component {

    render() {
        return <div className="homeContainer">
            <TopNav />

            <div>
                <Topics />
            </div>

            <BottomNav />
        </div>;
    }
}


export default Home;

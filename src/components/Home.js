import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import TopicList from "./topics/TopicList";


class Home extends Component {

    render() {
        return <div className="homeContainer">
            <TopNav />

            <div>
                <TopicList />
            </div>

            <BottomNav />
        </div>;
    }
}


export default Home;

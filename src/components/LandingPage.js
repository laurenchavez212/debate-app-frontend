import React, { Component } from 'react';
import "../App.css";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

class LandingPage extends Component {
    render() {
        return <div className="Landing">
            <TopNav />

            <div className="innerLanding">
                <h1>Landing Page hi</h1>
            
            </div>

            <BottomNav />
        </div>;
    }

}

export default LandingPage;

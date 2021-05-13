import React from "react";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";
import WhatIDo from "./components/WhatIDo";

class App extends React.Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <Introduction></Introduction>
                        <About></About>
                        <WhatIDo></WhatIDo>
                        <Timeline></Timeline>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
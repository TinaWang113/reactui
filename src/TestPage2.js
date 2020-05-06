import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class TestPage2 extends Component {
    handleClickedHeader = () =>{
        this.props.history.push("/");
    };
    handleClickedTestPage1 = () =>{
        this.props.history.push("/TestPage1");
    };

    render() {
        return (
            <div>
               <h2>Self-Learning react - testing page2</h2>
                <button onClick={this.handleClickedHeader} >Home</button> 
                <button onClick={this.handleClickedTestPage1} >TestPage1</button> 
            </div>
        )
    }
}


export default withRouter(TestPage2);
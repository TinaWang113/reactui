import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class TestPage1 extends Component {
    handleClickedHeader = () =>{
        this.props.history.push("/");
    };
    handleClickedTestPage2 = () =>{
        this.props.history.push("/TestPage2");
    };

    render() {
        return (
            <div>
               <h2>Self-Learning react - testing page1</h2>
                <button onClick={this.handleClickedHeader} >Home</button> 
                <button onClick={this.handleClickedTestPage2} >TestPage2</button> 
            </div>
        )
    }
}


export default withRouter(TestPage1);
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class Header extends Component {
    handleClickedTestPage1 = () =>{
        this.props.history.push("/TestPage1");
    };
    handleClickedTestPage2 = () =>{
        this.props.history.push("/TestPage2");
    };

    render() {
        return (
            <div>
               <h2>Self-Learning react - Home</h2>
                <button onClick={this.handleClickedTestPage1} >TestPage1</button> 
                <button onClick={this.handleClickedTestPage2} >TestPage2</button> 
            </div>
        )
    }
}

export default withRouter(Header);
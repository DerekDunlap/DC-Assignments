import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return <div id="navbar">
                <h1>HighOnCoding</h1>
                <button><h3>Home</h3></button>
                <button><h3 id="categoryHeader">Categories</h3></button>
            </div>
    }
}

export default Navigation
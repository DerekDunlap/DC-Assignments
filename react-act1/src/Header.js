import {Component} from 'react'
import Search from './Search'

class Header extends Component{
    render(){
        return(
            <div id='header-container'>
                <h1>Book Barn</h1>
                <div id="menuBtnDiv">
                    <button>Home</button>
                    <button>My Books</button>
                    <button>Browse</button>
                    <button>Community</button>
                </div>
                <Search/>
                <div id="loginBtnDiv">
                    <button>Sign In</button>
                    <button>Join</button>
                </div>
            </div>
        )
    }
}

export default Header
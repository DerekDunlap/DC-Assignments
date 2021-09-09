import {Component} from 'react'

class Search extends Component{
    constructor(){
        super()
        this.state={
            name:'',
        }

    }

    handleSearch=(name)=>{
        console.log(name.value)
        // this.setState({
        //     name:name.value,
        //     place:place.value
        // })
    }

    render(){
        return(
            <div id='searchDiv'>
                <input type='text' placholder='Search books' />
                <button onClick = {this.handleSearch}>Confirm</button>
            </div>
        )
    }
}

export default Search
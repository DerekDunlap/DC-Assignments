import { Component } from "react"
import BookList from "./BookList"

class MainContent extends Component{
    constructor(){
        super()
        this.state={
            booksArr:[]
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
        .then(response=>{
            return response.json()
        }).then(books=>{
            console.log(books)
            this.setState({
                booksArr:books
            })
        })
    }

    render(){
        return(
            <div>
                <div id='searchGenreDiv'>
                    <h1 id='searchGenreHeader'>Genres</h1>
                </div>
                <div id='booksMonthDiv'>
                    <h3 id='booksMonthHeader'>Best Books of the Month:</h3>
                    <ul>
                        <BookList books={this.state.booksArr}/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainContent
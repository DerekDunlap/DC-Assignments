import { Component } from "react"

class BookList extends Component{
    render(){
        const bookItems=this.props.books.map((book,index)=>{
            return <li key={index}>
                    <h4>{book.title}</h4>
                    <label>Author: {book.author}</label>
                    <a href='${book.link}'></a>
                    <label>Year: {book.year}</label>
                </li>
        })

        return(
            <ul>
                {bookItems}
            </ul>
        )
    }
}

export default BookList
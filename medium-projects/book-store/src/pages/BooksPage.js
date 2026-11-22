import { useState, useEffect } from "react"
import {fetchBooks, postDelBook, postFavBook, postUnfavBook} from "../BooksCaller"
import {Link} from "react-router-dom"
import '../styles/BooksPage.css'

function Books(){
    const[books, setBooks] = useState([])
    const[allBooks, setAllBooks] = useState([])
    const handleSearch = (txt) => {
        if(txt.trim() === ''){
            setBooks(allBooks)
        } else {
            const filBooks = 
            allBooks.filter(bk => bk.title.toLowerCase().includes(txt.toLowerCase()));
            setBooks(filBooks);
        } 
    }
    const toggleFav = async (bookId, isFav) => {
        await(!isFav ? postFavBook(bookId) : postUnfavBook(bookId))
        fetchBooks().then((res) =>{ 
            setBooks(res.data)
            setAllBooks(res.data)})
    }

    const handleDelete =  async(bookId) => {
        await postDelBook(bookId);
        fetchBooks().then((res) => {
            setBooks(res.data);
            setAllBooks(res.data)
        })
    }
    useEffect(() => {
        fetchBooks()
        .then((res) => {
            setBooks(res.data)
            setAllBooks(res.data)})
    }, [])

    return(
    <section className="books">

          <div className='search'>
            <input type="text" placeholder="Search for books...."
             onChange={(e) => handleSearch(e.target.value)}/>
          </div>

        <h2> Books </h2>
        <Link to="/books/add" className="add-link">Add</Link>
        <div className="books-list">
            {books.map((book, index) => (
                <div key={book.id} className="libook"> 
                <img className="bookimg" src={book.imageUrl} alt={book.title} />
                <Link to={`/books/${book.id}`} >{index + 1}. {book.title}</Link>
                <i className={book.isFavourite ?
                 "bi-heart-fill text-danger" : 
                 "bi-heart text-secondary"} 
                 onClick={() => toggleFav(book.id, book.isFavourite)}></i>

                <i className="bi bi-trash delete-icon"
                onClick={() => handleDelete(book.id)}></i>
                </div> 

            ))}
        </div>
    </section>)
}
export default Books;

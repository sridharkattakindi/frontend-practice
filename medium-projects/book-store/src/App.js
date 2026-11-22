import './styles/App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Books from './pages/BooksPage';
import Home from './pages/HomePage';
import BookPage from './pages/BookDetailsPage';
import logo from './images/logo.png'
import AddBook from './pages/AddBookPg';
import EditBook from './pages/EditBookPg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
          <div className='nav-logo'>
          <img src={logo} alt="No logo" className='logo'/>
          </div>

          <div className='nav-left'>
            <Link to="/home">Home  </Link>
          </div>

          <div className='nav-middle'>
          <Link to= "/books">Books</Link>
          </div>
          
        </nav>

        <main className='container'>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/books' element={<Books/>} />
          <Route path="/books/:id" element={<BookPage/>} />
          <Route path='/books/add' element={<AddBook/>}/>
          <Route path='/books/edit/:id' element={<EditBook/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

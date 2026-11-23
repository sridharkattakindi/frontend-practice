import { useEffect, useState } from "react";

import { fetchBookById } from "../BooksCaller";
import { useParams, Link } from "react-router-dom";
import "../styles/BookDetailsPage.css";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookById(id)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching the book");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Still loading....</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="book-details">
      <h2>BOOK DETAILS</h2>
      <Link to= {`/books/edit/${id}`} className="edit">Edit</Link>
      <img src={book.imageUrl} alt={book.title} className="bookimg" />
      <h2><strong>{book.title}</strong></h2>
      <hr />
      <p><strong>{book.id}</strong></p>
      <p><strong>{book.author}</strong></p>
      <p><strong>{book.isbn}</strong></p>
      <p><strong>{book.publishedDate}</strong></p>

      <hr />
      <div className="description"><strong>{book.description}</strong></div>

      <Link className="back-link" to="/books">Back to books</Link>
    </section>
  );
}
export default BookPage;

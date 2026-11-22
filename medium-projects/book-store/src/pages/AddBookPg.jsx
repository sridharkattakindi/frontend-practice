import { postBook } from "../BooksCaller";
import BookForm from "../components/BookForm";

function AddBook() {

    const handleSubmit = async (data) => {
       await postBook(data);
    }

  return (
    <div>
      <h1>Add Book</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}
export default AddBook;
import { useEffect, useState } from "react";
import { fetchBookById, postEditedBook } from "../BooksCaller"
import BookForm from "../components/BookForm";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
    const [book, setBook] = useState(null)
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        fetchBookById(id).then( (res) => {
            const loadedBook = res?.data?.book ?? res?.data;
            setBook({
    title: loadedBook?.title ?? "",
    author: loadedBook?.author ?? "",
    price: loadedBook?.price ?? "",
    description: loadedBook?.description ?? "",
    imageUrl: loadedBook?.imageUrl ?? "",
  });
        })
    }, [id]);

    const handleEditBook =  async(data) =>{
        await postEditedBook(id, data);
        navigate(`/books/edit/${id}`)
    }
    
    return(
        <>
            <BookForm initialData = {book} onSubmit = {handleEditBook}/>
        </>
    )
}
export default EditBook;

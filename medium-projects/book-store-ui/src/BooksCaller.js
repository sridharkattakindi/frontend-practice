import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const fetchBooks = () => api.get("/api/books");
export const postFavBook = (id) => api.post(`/api/books/${id}/favourite`)
export const postUnfavBook = (id) => api.post(`/api/books/${id}/unfavourite`)
export const postDelBook = (id) => api.delete(`/api/books/${id}`)
export const postBook = (book) => api.post("/api/books", book);
export const postEditedBook = (id, book) => api.patch(`/api/books/${id}`, book);
/**/
export const fetchBookById = (id) => api.get(`/api/books/${id}`)
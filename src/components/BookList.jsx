import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './BookList.css'
import { deleteBook } from "../features/bookSlice";

const BookList = ({onHandleEdit}) => {
  const dispatch = useDispatch();
  const {books} = useSelector((state) => state.booksR);
//   console.log(books);

  const handleDelete = (id) => {
  dispatch(deleteBook(id));
  }
 const handleEdit = (book) => {
//   console.log(book);
  onHandleEdit(book)
 }
  return (
    <div>
      <h2>List of Books</h2>

      {books && books.length > 0 ? (
        <ul className="book-list">
          {books?.map((book) => {
            return (
              <li key={book.id} className=" book-item">
              
                {book.title} by {book.author} - ${book.price} - {book.quantity}{' '}
                pcs
                <button onClick={()=>handleEdit(book)}>Edit</button>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
              </li>
            );
          })} 
        </ul>
      ) : (
        <p>No Book exist</p>
      )}
    </div>
  );
};

export default BookList;

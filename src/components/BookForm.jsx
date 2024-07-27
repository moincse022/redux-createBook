import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/bookSlice";
import { nanoid } from "nanoid";

const BookForm = ({ bookEdit,onHandle }) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  if(bookEdit){
   dispatch(updateBook(book))
  }
  else{
    dispatch(addBook({ ...book, id: nanoid() }));
  }
  setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
  })


    // Reset the form
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };
  useEffect(() => {
    if (bookEdit) {
      setBook(bookEdit);
    }
  }, [bookEdit]);


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="title"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="author"
          required
        />
        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="price"
          required
        />
        <input
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleChange}
          placeholder="quantity"
          required
        />
        {bookEdit ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">Add Book</button>
        )}
        {
            bookEdit && <button onClick={onHandle}>Cancel</button>
        }
      </form>
    </div>
  );
};

export default BookForm;

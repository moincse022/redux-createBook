import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
      { id: 1, title: 'X', author: 'anisul', price: 12, quantity: 15 },
      { id: 2, title: 'Y', author: 'mark', price: 15, quantity: 80 },
      { id: 3, title: 'Z', author: 'john', price: 10, quantity: 30 },
      { id: 4, title: 'A', author: 'jane', price: 20, quantity: 50 },
    ],
  };
  
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
        const id=action.payload;
        console.log(id);
        state.books=state.books.filter(book=>book.id!==id);
        
    },
    updateBook: (state, action) => {
        const {id,title,author,price,quantity}=action.payload;
        const exiting=state.books.find(book=>book.id===id);
        if(exiting){
            exiting.title=title;
            exiting.author=author;
            exiting.price=price;
            exiting.quantity=quantity;
        }
        
    },
    addBook: (state, action) => {
        const book=action.payload;
        state.books.push(book);
    }

  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { deleteBook,addBook,updateBook } = bookSlice.actions;
export default bookSlice.reducer;

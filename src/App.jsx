

import { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";

import BookList from "./components/BookList";

function App() {
  const [bookEdit,setBookEdit]=useState(null)
 const handleEdit=(edit)=>{
   setBookEdit(edit)
 }
//  console.log(bookEdit)
const handleCancel=(book)=>{
  setBookEdit(null)
}
  return (
    <>

     <div className="app">
       <h2>create app</h2>
       <BookForm bookEdit={bookEdit} onHandle={handleCancel} />
      <BookList onHandleEdit={handleEdit} />
     </div>
    </>
  );
}

export default App;

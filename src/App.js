import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Info from "./components/Info";
import BookDetails from "./components/Book/BookDetail";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<Info />} exact />
          <Route path="/books/:id" element={<BookDetails/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import NoteListPage from "./components/note-list-page/note-list-page";
import NotePage from "./components/note-page/notepage";
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import "./App.css";

const App = () => {
  return (

      <div className="container">
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" exact element={<NoteListPage/>}/>
            <Route path="/note/:id" exact element={<NotePage />}/>
          </Routes>

        </div>
      </div>

  )
}

export default App;
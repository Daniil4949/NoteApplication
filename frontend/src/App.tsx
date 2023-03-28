import React from "react";
import NoteListPage from "./components/note-list-page/note-list-page";
import NotePage from "./components/note-page";
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <div className="app">
                <Header/>
                <Routes>
                    <Route path="/" element={<NoteListPage/>}/>
                    <Route path="/note/:id" element={<NotePage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
import './App.css';
import React from 'react';
import { Addbook } from './books/Addbook';
import { Editbook } from './books/Editbook';
import {  BookDetails } from './books/BookDetails';
import IssuedComponent from './issued/issuedcomponent'
import { Detailsissued } from './issued/issuedDetails';
import { Addissued } from './issued/Addissued';
import { Route } from 'react-router-dom';
import BookComponent from './books/Bookcomponent';
import { Editissue } from './issued/Editissued';


function App() {
  
  return (
    <div className="App">   
        <switch>

          <Route exact path="/">
            <BookComponent />
          </Route>
          <Route path="/add">
            <Addbook/>
              </Route>

          <Route path="/book/edit/:id">
            <Editbook/>
          </Route>

          <Route path="/book/view/:id">
            <BookDetails />
          </Route>

          <Route exact path="/issued">
            <IssuedComponent />
          </Route>
          <Route path="/issued/add">
            <Addissued />
          </Route>

          <Route path="/issued/edit/:id">
            <Editissue />
          </Route>

          <Route path="/issued/view/:id">
            <Detailsissued />
          </Route>

          </switch>
    </div>
  );
}

export default App;

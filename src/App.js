import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import React from 'react'

import {Home} from "./pages/Home"
import {Book} from "./pages/Book"
import {Abouts} from "./pages/Abouts"
import {Contact} from "./pages/Contact"
import {BookList} from "./pages/BookList"
import {NewBook} from "./pages/Newbook"
import {Notfound} from "./pages/Notfound"
import {BookLayout} from "./pages/BookLayout"

// Admin
import {Login} from "./admin/Login"
import {Sidebar} from "./admin/Sidebar"
import {Admin} from "./admin/Admin"
import {Borrowers} from "./admin/Borrowers"



function App() {
  return (
   
    <>

  {/* <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/book">Book</Link></li>
    </ul>
  </nav> */}

    <Routes>
      <Route path="/" element={<Home />} />
    
      <Route path="/book" element={<BookLayout/>}>
      <Route index element={<BookList />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
      </Route>

      <Route path="/contact" element={<Contact />} />
      <Route path="/book" element={<BookList />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="*" element={<Notfound/>}/>

      {/* admin */}
      <Route path="/login" element={<Login />} />
    

      <Route path="/umaklibrary" element={<Sidebar/>}>
      <Route index element={<Admin />} />
      <Route path="borrowers" element={<Borrowers />} />
      </Route>



    </Routes>


 


    </>
  )
}

export default App;

import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import NotFound from './component/pages/NotFound';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddUsers from './component/users/AddUsers';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUser';
function App() {
  return (
   <Router>
      <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/add" element={<AddUsers/>}/>
      <Route exact path="/edit/:id" element={<EditUser/>}/>
      <Route exact path="/view/:id" element={<ViewUser/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
   
   </Router>
  );
}

export default App;

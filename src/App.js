import React from 'react';
import HomePage from './HomePage';
import ProfileManagement from './ProfileManagement';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import MyBooking from './MyBooking';
import './App.css';

function App() {
  return (
    <div>
       <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Ticket Tune</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/booking">My Booking</Link>
          </li>
          <li className="nav-item-profile">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item-cart">
            <Link className="nav-link" to="/cart">Cart</Link> 
          </li>
        </ul>
      </div>
    </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfileManagement />} />
          <Route path="/booking" element={<MyBooking />} />
          <Route path='/cart' element={<HomePage/>} />
        </Routes>

      </Router>


      <footer className="bg-light py-3 mt-5">
        <div className="container">
          <p className="mb-0">© 2023 TicketTune Website</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

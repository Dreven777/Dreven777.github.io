
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink  } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : ""
              };
            }}
          >
            <span className="nav-part">Home</span>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : ""
            };
          }}
        >
          <span className="nav-part">About</span>
      </NavLink>
      <NavLink
          to="/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : ""
            };
          }}
        >
          <span className="nav-part">Contact</span>
      </NavLink>
      <NavLink
          to="/contact/oleksandr"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : ""
            };
          }}
        >
          <span className="nav-part">Contact Oleksandr</span>
      </NavLink>

        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="contact/oleksandr" element={<UserContact name="Oleksandr" phone="+332132131231" />} />
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>
    Головна сторінка
    </h2>;
}

function About() {
  return <h2>Про нас</h2>;
}

function Contact() {
  return <h2>Контакти</h2>;
}

function UserContact(props) {
  return <h2>{props.name}<br/>{props.phone}</h2>;
}

export default App;

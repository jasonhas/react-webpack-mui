import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
    return (
      <div className="App">
        <Router>
            <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />   
            <Route path="*" element={<NotFound/>} />
            </Routes>
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        </Router>
      </div>
    );
  }
  
  export default App;
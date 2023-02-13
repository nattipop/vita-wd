import './App.css'
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Post from './Post';
import Home from './Home';

const About = React.lazy(() => import("./About"));
const AboutMe = React.lazy(() => import("./AboutMe"));
const Blog = React.lazy(() => import("./Blog"));
const Contact = React.lazy(() => import("./Contact"));

function App() {
  return (
    <div>
      <nav id="nav" className="navbar sticky-top navbar-expand-lg navbar-light bg-*">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>Contact</Link>
            </li>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <Home />
          </React.Suspense>
        } />
        <Route path="/about" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <About/>
          </React.Suspense>
        } />
        <Route path="/natalie" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <AboutMe/>
          </React.Suspense>
        } />
        <Route path="/blog" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <Blog/>
          </React.Suspense>
        } />
        <Route path="/blog/post/:_id" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <Post/>
          </React.Suspense>
        }/>
        <Route path="/contact" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <Contact/>
          </React.Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App

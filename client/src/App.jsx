import './App.css'
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Post from './Post';
import Home from './Home';
import Footer from './Footer';



const loading_img = "https://lh3.googleusercontent.com/-t-xfI89q2u7KdUYJOE-sqnd1MHE2j0Eo8ENuHNmofGshIR4uaBv-gQuaUysw5ORkT95HkCAqvqK-O7pCMpFNQSEzIeWOI_fMvT0tyNj6w2U9lXUvlPQC5LQWX7v7M6-W1QQcTu4CcArCN-557LST2X4lb2g0Lyj84mJjhFnwpRywVDANxvYCGNvM7764PnRL4EMxnLWD-ca0GjnlitWsI4-LYjX6jJVgECkHKQWFh1FlAniFNgujbkB5KE3P-dm5Ghskekpt9nEt4OkIOUE3VECdDtJWJ6TEJBJ5v0gJBVToEhL9pTDTw7Oam4Z8YhIdDHPKI__lsQwKBK7rxfHgrHnYpkDl55D4bbcdZiClr-zkc94hcrUWlSvi9LOOEn89t47Y4YFEmeEL5W1uTGwD7iTjOkOscDUN4kfKssAEGfNyTTDsOPBGowMJrWhPqChcFaujJR9xIdbE5UAmzFDziufRIhr2P7isVHGLtP112hCaCAfBkCJhQzXeDW3a2uALh_gSyE3wIyClZltB-ZweQlkm3fY--Wp6ptUFbc-VrpnxjqFq4ik8IMLNja7R_4spkX-jlLNmrii1ukQMavnQHpy_SG8E1BpTPPxxnlX8_UlyJySs-LH8uXiRAQKEqjN0yJ92ywcFgZZYGaU47FscwuDbdD3QEz6iKGjyENKgzrbhcPpa6fQ_fAVBZhUBsNkpzpWm95mult8sNJOMZ9ZzLYjLurIdue9royQqDqc2qFLXDO0vqE6J4DGLWhO771O_0O-i3whjJGcMyP4H6cimpE0JHEY9dG26xUH19g_9UYAzksuNxKRVJqeGymbcDgs8Wmjbqms-fUV3mXQoMwo5rxqMqSTJWNnEU1R9jG2RKTS4LczVNeWV4kwwAufVIEfPhNbcuuhqtN6kwFA9zoyEVKzk_Ji1TvqeWfoEG_5wVQB=w1240-h640-no?authuser=0";

const About = React.lazy(() => import("./About"));
const AboutMe = React.lazy(() => import("./AboutMe"));
const Blog = React.lazy(() => import("./Blog"));
const Contact = React.lazy(() => import("./Contact"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />}>
            <Home />
          </React.Suspense>
        } />
        <Route path="/about" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <About/>
          </React.Suspense>
        } />
        <Route path="/natalie" element={
          <React.Suspense fallback={<img className="loading centered_div" src={loading_img} />}>
            <AboutMe/>
          </React.Suspense>
        } />
        <Route path="/blog" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Blog/>
          </React.Suspense>
        } />
        <Route path="/blog/post/:_id" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Post/>
          </React.Suspense>
        }/>
        <Route path="/contact" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Contact/>
          </React.Suspense>
        } />
      </Routes>
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-*">
        <button id="hamburger-menu" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
          <span><img width="40px" style={{paddingTop: "10px"}} src="https://lh3.googleusercontent.com/VCtZIDnYX6k5v37qaKM21Kv_x9V2W1lBFb_6k7t8pamr6AX5JhV4nflXrq5vUsKzskCOGPkO8qzyubM4biXwu0wC5l1s9u9EzODFfagL-_errEVjJuPrti6Vl2J-oCEiwskAeXvGagG-rALEnAx4PS8NcFbNsLVv0r5L8xOR6q1quaqoxuPEJaOQVu2BS4BsEx5F6F7weRBeB3UwMidEF_0xYnOqmtJFZKYxAXxs9vmk7OXwB6CRL5uetSTNTKz8RV59eySdTRRcuQDB_kY8gKx1S55PyfPrg6kE0bzZAK2swsgtuQjGR8ohphEPqIjKRQLqxPvKhrxax6tqUJQlDCkyz2lCyMezC2FaqpMllMSw3eJGzH_-u5b49PE7C06H09p2PKHiLBABQkSbpRAyC_lcKWuw1vukbWek3jAq4HZPRZlJMVATV2upiJdscmjEhJ8gJN6S3D7alaCMHQORiUsh21X85o7eROoSMKhGgnKZl5It7QkRSXvRbDzuLwTTqrr2rC9Ah7YePDb4u9UM5EbPR_KGowc-l4efi9EeZ8qxb_TKXZNMTfftZ_ItSzmA6meoMIvuoWtkn8wpGSsBB6gu1cVjM_2O-u1YnRClaksvv8Q4B4HPPM45qrdaUjy9vu84tMNb2c3UVlZZGe1uzvwIp0pFSGcQ2gb_QgPBSMkLsKnlhowlUeUsuR5Qw02e7lEWXuj5sjb-J0g5auWS029pWaKQxrlJ27LsKOAkOlwIA48GfaO_ofsHMdsZPlDthW5vAs9lfLddT8-wgfDx9V7O730wxHm6oMFghAB97slSmcqDuRmnCNyrlByE7LMobCzxAwqpjOWc79tVDjIes7B_W21s9BweRMj2FyUouNqwYLD3W0uP4BMpcmevLTEGjEJjfYXSIr0l6kG7C7HBoAaufCA20_TWYlWFuCxp0fGE=w750-h714-no?authuser=0" /></span>
        </button>
        <div className="collapse navbar-collapse container" id="navbarNavDropdown">
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
            <div className="dropdown nav-item">
              <div className="nav-link dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/about">
                  What is Vita?
                </a></li>
                <li><a className="dropdown-item" href="/natalie">
                  About Natalie
                </a></li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      <Footer />
    </div>
  )
}

export default App

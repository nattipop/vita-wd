import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Nav from './Nav';
import React from 'react';
import Dropdown from './Dropdown';
import Websites from './Websites';
import Logos from './Logos';

const loading_img = "https://lh3.googleusercontent.com/-t-xfI89q2u7KdUYJOE-sqnd1MHE2j0Eo8ENuHNmofGshIR4uaBv-gQuaUysw5ORkT95HkCAqvqK-O7pCMpFNQSEzIeWOI_fMvT0tyNj6w2U9lXUvlPQC5LQWX7v7M6-W1QQcTu4CcArCN-557LST2X4lb2g0Lyj84mJjhFnwpRywVDANxvYCGNvM7764PnRL4EMxnLWD-ca0GjnlitWsI4-LYjX6jJVgECkHKQWFh1FlAniFNgujbkB5KE3P-dm5Ghskekpt9nEt4OkIOUE3VECdDtJWJ6TEJBJ5v0gJBVToEhL9pTDTw7Oam4Z8YhIdDHPKI__lsQwKBK7rxfHgrHnYpkDl55D4bbcdZiClr-zkc94hcrUWlSvi9LOOEn89t47Y4YFEmeEL5W1uTGwD7iTjOkOscDUN4kfKssAEGfNyTTDsOPBGowMJrWhPqChcFaujJR9xIdbE5UAmzFDziufRIhr2P7isVHGLtP112hCaCAfBkCJhQzXeDW3a2uALh_gSyE3wIyClZltB-ZweQlkm3fY--Wp6ptUFbc-VrpnxjqFq4ik8IMLNja7R_4spkX-jlLNmrii1ukQMavnQHpy_SG8E1BpTPPxxnlX8_UlyJySs-LH8uXiRAQKEqjN0yJ92ywcFgZZYGaU47FscwuDbdD3QEz6iKGjyENKgzrbhcPpa6fQ_fAVBZhUBsNkpzpWm95mult8sNJOMZ9ZzLYjLurIdue9royQqDqc2qFLXDO0vqE6J4DGLWhO771O_0O-i3whjJGcMyP4H6cimpE0JHEY9dG26xUH19g_9UYAzksuNxKRVJqeGymbcDgs8Wmjbqms-fUV3mXQoMwo5rxqMqSTJWNnEU1R9jG2RKTS4LczVNeWV4kwwAufVIEfPhNbcuuhqtN6kwFA9zoyEVKzk_Ji1TvqeWfoEG_5wVQB=w1240-h640-no?authuser=0";

const About = React.lazy(() => import("./About"));
const Pricing = React.lazy(() => import("./Pricing"))
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
        <Route path="/pricing" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Pricing/>
          </React.Suspense>
        } />
        <Route path="/contact" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Contact/>
          </React.Suspense>
        } />
        <Route path="/websites" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Websites />
          </React.Suspense>
        } />
        <Route path="/logos" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Logos />
          </React.Suspense>
        } />
        <Route path="/menu" element={<Dropdown />} />
      </Routes>
      <Nav />
      <Footer />
    </div>
  )
}

export default App

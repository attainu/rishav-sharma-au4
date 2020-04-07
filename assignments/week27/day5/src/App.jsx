import React from 'react';
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => (
  <>
    <Header />
    <main>
      <h1>Hello Rishav</h1>
      <img className="mainimg" src="https://cdn.dribbble.com/users/276303/screenshots/10746475/media/d44bd2b37c0abda2da5bb5940ce3a5d3.jpg" />
    </main>
    <Footer />
  </>
)

export default App;
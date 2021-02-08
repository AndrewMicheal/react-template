import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import {Route , Switch , Redirect } from 'react-router-dom'
import notfound from './Components/NotFound/notfound.jsx';

function App() {
  return (
    <>
     <Navbar />
      <Home/>
      <Switch>
          <Route path = "/portfolio"  component = {Portfolio}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/notfound" component = {notfound}/>
          <Route path="/" exact component = {About}/>
          <Redirect to = "/notfound"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

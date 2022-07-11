import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import Projects from './components/TetrisGame/Game';


const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Navbar toggle = {toggle} />
    <Sidebar isOpen = {isOpen} toggle={toggle}/>
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/contact' component = {Contact} />
        <Route path='/about' component = {About} />
        <Route path='/projects' component = {Projects} />
        <Redirect to='/' />
      </Switch>
    </div>
    </>
  );
};

export default App;

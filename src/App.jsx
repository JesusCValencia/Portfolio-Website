import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';


const App = () => {
  return (
    <><Navbar/>
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/contact' component = {Contact} />
        <Route path='/about' component = {About} />
        <Redirect to='/' />
      </Switch>
    </div>
    </>
  );
};

export default App;

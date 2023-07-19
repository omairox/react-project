import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import Add from './components/Add';
import './App.css';
import './lib/font-awesome/css/all.min.css'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<WatchList/>}/>
          <Route path='/watched' element={<Watched/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>

      </Router>
      </GlobalProvider>
  );
}

export default App;

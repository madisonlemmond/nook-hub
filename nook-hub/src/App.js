import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from 'react-router-dom';
import './App.css';
import { fetchFishData, fetchAllFishData } from './api';
import FishList from './components/FishList';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  // const [data, setData] = useState([]);


  // useEffect(() => {
  //   const fetchedData = fetchAllFishData();
  //   console.log(fetchedData)
  //   this.setData({fetchedData});
  // }, [])
     
  const Home = () => {
    return (
      <div className="Home">
      </div>
    );
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        
        <Route path="/fish"  element={<FishList/>}/>
        
      </Routes>
    </Router>
  );
    return (
      <FishList />
    );

}

export default App;

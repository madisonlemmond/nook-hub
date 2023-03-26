import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from 'react-router-dom';

import { fetchFishData, fetchAllFishData } from './api';
import FishList from './components/FishList/FishList';
import Navigation from './components/Navigation/Navigation';
import Critterpedia from './components/Critterpedia/Critterpedia';
import styles from './App.module.css';

const App = () => {
  // const [data, setData] = useState([]);


  // useEffect(() => {
  //   const fetchedData = fetchAllFishData();
  //   console.log(fetchedData)
  //   this.setData({fetchedData});
  // }, [])
     
  const Home = () => {
    return (
      <div></div>
    );
  };

  return (
    <Router>
      <Navigation className={styles.nav}/>
      <div className={styles.title}>
          <h1 >Nook Hub</h1>
      </div>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        
        <Route path="/critterpedia"  element={<Critterpedia/>}/>
        
      </Routes>
    </Router>
  );

}

export default App;

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FishList from '../FishList/FishList';
import { fetchAllFishData } from '../../api';

import { useState } from 'react';

import styles from './Critterpedia.module.css';
import { useEffect } from 'react';

const Critterpedia = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);


    useEffect(() => {
      const fetchAPI = async () => {
        switch (value) {
          case 0:
            setData(await(fetchAllFishData()));
            break;
          case 1:
            setData([]);
            break;
          case 2:
            setData([]);
        }
      };

      fetchAPI();
    }, [value]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    const handleClick = (e) => {
      console.log(e.target.value)
    }   

    return data && (
        <div>
        <Box sx={{width: '100%'}}>
        <AppBar position="static" sx={{backgroundColor: '#74e0aa', color: '#646665'}}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
                style: {
                  backgroundColor: "#c48d3f"
                }
              }}
            textColor="inherit"
            centered
        
          >
            <Tab label="Fish" sx={{fontWeight: "bold"}} onClick={handleClick} />
            <Tab label="Bugs" sx={{fontWeight: "bold"}} onClick={handleClick} />
            <Tab label="Sea Creatures" sx={{fontWeight: "bold"}} onClick={handleClick} />
          </Tabs>
        </AppBar>
        </Box>
        <FishList fishData={data} />
        
        </div>
    
    )
}

export default Critterpedia
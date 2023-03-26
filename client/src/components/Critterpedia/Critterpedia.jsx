import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { fetchAllFishData } from '../../api';

import { useState } from 'react';

import styles from './Critterpedia.module.css';

const Critterpedia = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
      console.log(newValue)
      switch (newValue) {
        case 0:
          const fetchAPI = async () => {
            setData(await(fetchAllFishData()));
          };
          fetchAPI();
          break;
        case 1:
          break;
        default:
          break;

      }

     
      setValue(newValue);

      console.log(data)
    }

    const handleClick = (e) => {
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
        
        </div>
    
    )
}

export default Critterpedia
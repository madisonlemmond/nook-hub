import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useState } from 'react';

import styles from './Critterpedia.module.css';

const Critterpedia = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(event)
      }

    const handleClick = (e) => {
        console.log(e.target)
    }   

    return (
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
            <Tab label="Fish" className={styles.Tab} onClick={handleClick} />
            <Tab label="Bugs" className={styles.Tab} onClick={handleClick} />
            <Tab label="Sea Creatures" className={styles.Tab} onClick={handleClick} />
          </Tabs>
        </AppBar>
        </Box>
        </div>
    
    )
}

export default Critterpedia
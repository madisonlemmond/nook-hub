import {Drawer, IconButton, Divider, ListItem, List, Icon, ListItemButton} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  fetchFishData } from '../../api/index';

import styles from './Navigation.module.css';

const Navigation = () => {

  const [open, setOpen] = useState(false);
  const [fishIcon, setFishIcon] = useState('');

  useEffect(() => {
    const getFishIcon = async () => {
      setFishIcon(await(fetchFishData('sea_bass')).then(res => res.icon_uri));
    };
    getFishIcon();
}, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = async () => {
   const data = await fetchFishData('sea_bass').then((res) => {
    console.log(res)

      return res.data.icon_uri;
   });
   return data.icon_uri;
  
  }

  return fishIcon && (
    <div>
      <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"     
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        open={open}
        anchor={"left"}
        onClose={() => handleDrawerClose}
      >
        <Divider/>
        <List>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <ListItem>
        <Link to="/fish">
          <ListItemButton  onClick={handleDrawerClose} >
            <img className={styles.iconButton} src={fishIcon} alt="fish icon" />
          </ListItemButton>
        </Link>
        </ListItem>
        </List>
        <Divider/>
      </Drawer>
    </div>
  );
}
export default Navigation;
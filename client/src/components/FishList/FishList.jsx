import React, { useState, useEffect } from 'react';
import { fetchAllFishData, fetchFishData } from '../../api';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import styles from './FishList.module.css';

const FishList = () => {
    const [fishData, setFishData] = useState([]);
    const nameLocale = 'name-USen';
    const imageUri = 'image_uri'

    useEffect(() => {
        const fetchAPI = async () => {
            setFishData(await(fetchAllFishData()));
        };

        fetchAPI();
    }, []);

   return  fishData && 
        fishData.map((fish) => (
            <Card sx ={{background: '#f6eee1'}}>
                <CardContent style={{textTransform: 'capitalize'}}>
                    {fish.name[nameLocale]}
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ 
                        width: 151,
        
                    }}
                    image={fish[imageUri]}
                    alt=""
                />
            </Card>
        ))
    
}

export default FishList;
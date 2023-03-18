import React, { useState, useEffect } from 'react';
import { fetchAllFishData, fetchFishData } from '../api';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

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

    const formatName = (fishName) => {
        return fishName.charAt(0).toUpperCase + fishName.slice(1);
    }

   return  fishData && 
        fishData.map((fish) => (
            <Card>
                <CardContent style={{textTransform: 'capitalize'}}>
                    {fish.name[nameLocale]}
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={fish[imageUri]}
                    alt=""
                />
            </Card>
        ))
    
}

export default FishList;
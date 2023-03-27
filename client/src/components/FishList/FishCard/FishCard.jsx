import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';

import styles from './FishCard.module.css';

const FishCard = ({fish}) => {
    const [caught, setCaught] = useState(false);
    const [donated, setDonated] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        if (donated) {
            setCaught(true);
        }
    }, [donated]);

    useEffect(() => {
        if (!caught) {
            setDonated(false);
        }
    }, [caught]);

    const getMonthsAvailable = (monthArray) => {
        let startMonth = monthArray.at(0);
        let endMonth = monthArray.at(-1);

        const dateStart = new Date();
        dateStart.setMonth(startMonth - 1);
        const dateEnd = new Date();
        dateEnd.setMonth(endMonth - 1);

        const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

        
        startMonth = formatter.format(dateStart);
        endMonth = formatter.format(dateEnd);

        return `${startMonth} - ${endMonth}`;

    }

    const style = {
        "&.MuiButton-root": {
            border: ".5px lightgray solid",
            borderRadius: 28
          },
        "&.MuiButton-contained": {
            background: "#c4d9a9",
            border: "none"
          },
          "&.MuiButton-outlined": {
            border: ".5px lightgray solid",
          }
    }

 
    const nameLocale = 'name-USen';
    const imageUri = 'image_uri'
    const iconUri = 'icon_uri';

    return fish && (
        <Card sx ={{
            background: '#f5e6ce',
            width: '20rem',
            height: '25rem',
            margin: '2rem'
            }}>
            <CardContent style={{textTransform: 'capitalize', padding: 0}}>
                <div className={styles.titleContainer}>
                    <img className={styles.icon} src={fish[iconUri]}/>
                    <Typography className={styles.fishName} variant='h5'>
                        {fish.name[nameLocale]}
                    </Typography>
                </div>
            </CardContent>
            <div className={styles.image}>
                <CardMedia
                    component="img"
                    sx={{ 
                        width: 151,
                    }}
                    image={fish[imageUri]}
                    alt="fish icon"
                />
            </div>
            <div className={styles.fishDetails}>
                <Typography variant='body' className={styles.detail}>
                    {fish.availability.location}
                </Typography>
                <Divider></Divider>
                <Typography variant='body' className={styles.detail}>
                    {fish.availability.isAllYear ? 
                        'All Year' :
                        getMonthsAvailable(fish['availability']['month-array-northern'])
                    }
                </Typography>
                <Divider></Divider>
                <Typography variant='body' className={styles.detail}>
                    {fish.availability.isAllDay ? 
                        'All Day' :
                        fish.availability.time
                    }
                </Typography>
                <Divider></Divider>
                <Typography variant='body' className={styles.detail}>
                    Price: {fish.price}
                </Typography>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.actionButton}>
                    <Button
                    value="caught"
                    variant={caught ? "contained": "outlined"}
                    sx={style}
                    onClick={() => setCaught(caught => !caught)}
                    >
                        <img className={styles.buttonIcons} src='/acnh-net.png' />
                    </Button>
                </div>
            
                <div className={styles.actionButton}>
                    <Button
                    value="donated"
                    variant={donated ? "contained": "outlined"}
                    sx={style}
                    onClick={() => setDonated(donated => !donated)}
                    >
                        <img className={styles.buttonIcons} src='/museum-icon.png' />
                    </Button>
                </div>

                <div className={styles.actionButton}>
                    <Button
                    value="favorite"
                    variant={favorite ? "contained": "outlined"}
                    sx={style}
                    onClick={() => setFavorite(favorite => !favorite)}
                    >
                        <img className={styles.buttonIcons} src='/acnh-favorite-icon.png' />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default FishCard;
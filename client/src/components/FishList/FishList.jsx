import React from 'react';
import FishCard from './FishCard/FishCard';

import styles from './FishList.module.css';

const FishList = ({fishData}) => {
   return  fishData && (
    <div className={styles.card}>
    {fishData.map((fish) => (
        <FishCard fish={fish} key={fish.id}/>
    ))}
    </div>
   )
}

export default FishList;
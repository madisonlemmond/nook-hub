import { configureStore } from '@reduxjs/toolkit'

//Add additional Reducers here
import VillagersReducer from './villager'
import FishReducer from './fish';

// The store combines/configures reducers into a single reactDOM. The properties or keys provided here dictate the root state names IE villager, fish, etc
const store = configureStore({
    reducer: {
        fish: FishReducer, 
        villager: VillagersReducer
    }
});

export default store;
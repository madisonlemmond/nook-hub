import { configureStore } from '@reduxjs/toolkit'

//Add additional Reducers here
import villagersReducer from './villager'

// The store combines/configures reducers into a single reactDOM. The properties or keys provided here dictate the root state names IE villager, fish, etc
const store = configureStore({
    reducer: {
        villager: villagersReducer
    }
});

export default store;
import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from '../components/favoriteSlice'

let store = configureStore({
    reducer: {
        favorites: favoriteReducer 
    }
})

export default store
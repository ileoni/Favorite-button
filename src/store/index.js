import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from '../components/favoriteSlice'
import {
    persistStore,
    persistReducer,
    PERSIST
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, favoriteReducer)

let store = configureStore({
    reducer: {
        favorites: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [PERSIST]
        }
    })
})

export let persistor = persistStore(store)  

export default store
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducers'
console.log(rootReducer)
const store = configureStore({

    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck : false
        })
    },
    devTools: true

})
export default store
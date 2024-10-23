// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers'; // Vamos criar isso a seguir

const store = configureStore({
    reducer: rootReducer, 

});

export default store;
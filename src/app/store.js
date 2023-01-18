import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../services/authApi'
import tokenReducer from '../features/tokenSlice'

export const store = configureStore({
    reducer: {      
      [authApi.reducerPath]: authApi.reducer,
      token: tokenReducer,
    },    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  })

setupListeners(store.dispatch)
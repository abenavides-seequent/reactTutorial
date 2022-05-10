import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import themeReducer from './features/theme'

export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
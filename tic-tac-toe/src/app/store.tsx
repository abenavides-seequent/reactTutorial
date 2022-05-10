import {configureStore} from '@reduxjs/toolkit'
import themeReducer from '../features/theme'
import winningReducer from '../features/winnerSquares'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    winning: winningReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
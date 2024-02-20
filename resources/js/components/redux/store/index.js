import { configureStore } from '@reduxjs/toolkit'
import admin from '../reducers/admin'

export const store = configureStore({
  reducer: {
    admin: admin
  },
})

import { configureStore } from '@reduxjs/toolkit'
import user from '../reducers/user'
import promotions from '../reducers/promotions'

export const store = configureStore({
  reducer: {
    user: user,
    promotions: promotions
  },
})

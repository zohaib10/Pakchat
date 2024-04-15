// import Reactotron from '../../ReactotronConfig'
import { createEpicMiddleware } from 'redux-observable'

import { ApplicationState } from '../types'
import { RootActions } from '../types/application/RootActions'
import { createRootReducer } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { rootEpic } from './rootEpic'

export const createStore = () => {
  const epicMiddleware = createEpicMiddleware<RootActions, RootActions, ApplicationState>()
  const rootReducer = createRootReducer()
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), epicMiddleware],
    devTools: true,
    preloadedState: {},
    // enhancers: [Reactotron.createEnhancer!()],
  })

  epicMiddleware.run(rootEpic)

  return store
}

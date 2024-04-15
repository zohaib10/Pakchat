import { combineReducers } from 'redux'

import { navigation } from '../feature/Navigation'

export const createRootReducer = () => combineReducers({ navigation })

import { combineEpics } from 'redux-observable'
import { navigateEpic } from './navigate.epic'

export const navigationEpics = combineEpics(navigateEpic)

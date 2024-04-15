import { combineEpics } from 'redux-observable'
import { navigationEpics } from '../feature/Navigation'

export const rootEpic = combineEpics(navigationEpics)

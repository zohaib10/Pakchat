import { Reducer } from 'redux'

import { NavigationActions } from './actions'
import { NavigationState } from '../../../types'

export const navigation: Reducer<NavigationState, NavigationActions> = (state = {}, action) => {
  switch (action.type) {
    case 'navigation.navigate':
      return {
        ...state,
      }
    default:
      return state
  }
}

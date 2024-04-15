import { Epic, ofType } from 'redux-observable'
import { map, tap } from 'rxjs'
import { RootActions } from '../../../types/application/RootActions'
import { ApplicationState } from '../../../types'
import { navigate, navigateSuccess } from '../state'
import { appNavigator } from '../AppNavigator'

export const navigateEpic: Epic<RootActions, RootActions, ApplicationState> = (action$) =>
  action$.pipe(
    ofType('navigation.navigate'),
    map((action) => action as ReturnType<typeof navigate>),
    map((action) => action.payload),
    tap((payload) => console.log('Navigating ', payload)),
    map((payload) => appNavigator.navigate(payload.screen, payload.data)),
    map(navigateSuccess),
  )

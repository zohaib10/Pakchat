import { ScreenPayload, Screens } from '../../../types'

export const navigate = (screen: Screens, data?: ScreenPayload) =>
  ({
    type: 'navigation.navigate',
    payload: { screen, data },
  }) as const

export const navigateSuccess = () =>
  ({
    type: 'navigation.navigate.success',
  }) as const

export type NavigationActions = ReturnType<typeof navigate | typeof navigateSuccess>

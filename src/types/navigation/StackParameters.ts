export type StackParameters = {
  login?: {}
  signup?: {}
  home?: {}
}

export type Screens = keyof StackParameters

export type ScreenPayload = StackParameters[Screens]

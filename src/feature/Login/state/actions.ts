export const onLogin = () => ({ type: 'auth/login' }) as const

export type LoginActions = ReturnType<typeof onLogin>

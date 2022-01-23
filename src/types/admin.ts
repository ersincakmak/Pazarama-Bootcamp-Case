import { IApplication } from './application'

export interface IUserState {
  applications: IApplication[]
  user: IUser | null
  message: string
}

export interface IUser {
  username: string
  name: string
}

export interface ILoginPayload {
  username: string
  password: string
}

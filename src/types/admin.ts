import { IApplication } from './application'

export interface IUserState {
  applications: IApplication[]
  message: string
}

export interface ILoginPayload {
  username: string
  password: string
}

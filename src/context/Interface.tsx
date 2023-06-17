export type Dispatch = React.Dispatch<IAction>

export interface IState {
    user: {}
}

export interface IAction {
  type: string,
  key:string,
  payload: any
}
import { initalState } from "../share/UserProp"

enum ACTIONS  {
    LOGIN = 'login',
    LOGOUT = 'logout',
    REGISTER = 'register'
}

type State = typeof initalState
type userAction = | { type:  ACTIONS.LOGIN | ACTIONS.LOGOUT | ACTIONS.REGISTER; }


export default (state: State, action: userAction) => {
    switch (action.type === ACTIONS.LOGIN) {
        default:
            return state
    }
}
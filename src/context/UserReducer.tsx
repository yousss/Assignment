import { initalState } from "../share/UserProp"

type State = typeof initalState
type userAction = | { type: 'login' | 'logout' | 'register'; }


export default (state: State, action: userAction) => {
    switch (action.type === 'login') {
        default:
            return state
    }
}
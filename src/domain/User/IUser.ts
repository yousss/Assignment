import { initalState } from "../../context/UserProp";

export interface LoginProp {
    login: string;
    id: string;
};



export type IUser = typeof initalState;


// export interface IUser extends LoginProp {
//     node_id: string,
//     gravatar_id: string,
//     url: string,
//     html_url: string,
//     followers_url: string,
//     following_url: string
//     avatar_url: string,
//     gists_url: string,
//     starred_url: string,
//     subscriptions_url: string,
//     organizations_url: string,
//     repos_url: string,
//     events_url: string,
//     received_events_url: string,
//     type: string,
//     site_admin: boolean
// }


export interface IUserInfo {
    avatar_url?: string;
    following?: string;
    followers?: string;
    login?: string;
    name?: string;
}

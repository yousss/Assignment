import Dexie from 'dexie';
import { IUser} from '../share/IUser'


export class MyAppDatabase extends Dexie {
    users: Dexie.Table<IUser, number>;

    constructor() {
        super("MyAppDatabase");

        this.version(1).stores({
            users: `++id, 
            login, 
            node_id, 
            gravatar_id, 
            url, 
            html_url, 
            followers_url, 
            following_url, 
            avatar_url, 
            gists_url, 
            starred_url, 
            subscriptions_url, 
            organizations_url, 
            repos_url, 
            received_events_url, 
            type, 
            site_admin
             `
        });

        this.users = this.table("users");
    }
}
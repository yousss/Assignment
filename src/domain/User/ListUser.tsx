import {  Divider, List, ListItem } from '@material-ui/core';
import React from "react";
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';
import { useGetUsers } from "../../hooks/User";
import { LoginProp } from '../../share/IUser';
import styles from './style.module.scss';




const User: React.FC<LoginProp> = ({ login, id }) => {
    return (
        <Link to={`users/${login}/${id}`} className={styles.link}>
            <List  component="nav" aria-label="mailbox folders">
                <ListItem className={styles['text-center']} button>
                    ID: {id}
                </ListItem>
                <Divider/>
            </List>
        </Link>
    )
}

export const ListUser = (): JSX.Element => {

    const {loading, isError, data } = useGetUsers();
    
    return (
     
        <div>
            <Loader loading={loading} />
            <div className={styles.paper}>
                { data && typeof data === 'object' ?
                (data.map(
                    user => {
                        return <User login={user.login} id={user.id} key={user.id} />
                    })
                ) : <h1>No record found.</h1>
                }
            </div>
            { isError ? (<h3>Something went wrong.</h3>):''}
        </div>
            
    );
}
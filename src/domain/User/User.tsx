import { Avatar, Card, CardActionArea, CardActions, CardContent, ListItemAvatar, Typography } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';
import Loader from '../../components/Loader';
import { useGetUser } from "../../hooks/User";
import { IUserInfo, LoginProp } from '../../share/IUser';
import styles from './style.module.scss';



export const UserInfo = ({ match }: RouteComponentProps<LoginProp>):JSX.Element => {
    const { login } = match.params
     
    const { loading, isError, data } = useGetUser(login);
    
    return (
        <div className={styles.userDetail}>
            {
                data && typeof data === 'object' ? 
                <RenderUser
                    followers={data.followers}
                    following={data.following}
                    avatar_url={data.avatar_url}
                    login={data.login}
                />
                : <Loader loading={loading} />
            }
            {isError ? <h3>Something went wrong.</h3>: ''}
        
        </div>
      )
}

 const RenderUser: React.FC<IUserInfo> = ({avatar_url, login, followers, following}) => {
     return (
         <Card className={styles.userIfo}>
            <CardActionArea>
                <ListItemAvatar className={styles.avatar}>
                    <Avatar alt="Remy Sharp" src={avatar_url} />
                </ListItemAvatar>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {login}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                number of follower: {followers}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                number of following: {following}
                </Typography>
                </CardContent>
            </CardActionArea>
             <CardActions className={styles.userInfo__button }>
                 <CustomButton href="/" color="red">Back to User List</CustomButton>
            </CardActions>
        </Card>
        )
    }
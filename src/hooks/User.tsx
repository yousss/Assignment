import { useEffect, useState } from 'react';
import { IUser, IUserInfo } from '../domain/User/IUser';
import { MyAppDatabase } from '../IndexedDB/User';
import http from './http';

let db = new MyAppDatabase();


export const useGetUser = (login: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IUserInfo>({});
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        getUser(login)
    }, [login]);

    const getUser = async (login: string) => {
        setLoading(true)
        try {
            const { data } = await http.get(`/users/${login}`)
            setData(data)
        } catch (error) {
            setIsError(true)
            throw error;
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, isError, data}
}


export const useGetUsers = (dependencies: any[] = []) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IUser[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        getAllUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    
    const getAllUser = async () => {
        setLoading(true)
        try {
            const { data } = await http.get<IUser[]>("/users");
            if (data) {
                const filteredResult = data.slice(0, 20);
                if (filteredResult && filteredResult.length !== 0) {
                    filteredResult.forEach(user => db.users.put(user, parseInt(user.id)))
                }
              setData(filteredResult)
            }
        } catch (error) {
            setIsError(true)
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { loading, isError, data }
}

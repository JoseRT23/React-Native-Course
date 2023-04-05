import { useEffect, useRef, useState } from 'react'
import { User, reqResList } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async() => {
       await reqResApi.get<reqResList>('/users', {
        params: {
            page: pageRef.current
        }
       })
        .then(({data:{data}}) => { 
            if (data.length > 0) {
                setUsers(data)
            }else {
                alert('No find more users!')
            }
        })
        .catch(err => console.log(err))
    }

    const nextPage = () => {
        pageRef.current ++
        getUsers()
    }
    const prevPage = () => {
        if (pageRef.current > 1) {
            pageRef.current --
            getUsers()
        }
        getUsers()

    }

    return {users, getUsers, nextPage, prevPage}
}

export default useUsers
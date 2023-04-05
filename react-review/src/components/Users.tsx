import { User } from '../interfaces/reqRes'
import useUsers from '../hooks/useUsers'

const Users = () => {

    const { users, nextPage, prevPage } = useUsers();

    const renderUsers = (user:User) => {
        return (
            <tr key={user.id.toString()}>
                <td><img style={{borderRadius:"50%", width:"70px"}} alt={user.first_name} src={user.avatar}/></td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { users.map(user => renderUsers(user)) }
            </tbody>
        </table>

        <button className='btn btn-primary' onClick={prevPage}>
            Prev
        </button>
        <button className='btn btn-primary' onClick={nextPage}>
            Next
        </button>
    </>
  )
}

export default Users
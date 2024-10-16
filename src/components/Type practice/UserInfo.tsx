
import { Info } from './Types'
const UserInfo = ({id , name , email}:Info) => {
  return (
    <div className='m-10'>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserInfo
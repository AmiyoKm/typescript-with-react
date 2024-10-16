
import { AdminInfoList } from './Types'
const AdminInfo = ({id , name , email , role , adminPass}:AdminInfoList) => {
  return (
    <div className='m-10'>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Role{role}</p>
        <p>Admin Password:{adminPass}</p>
    </div>
  )
}

export default AdminInfo
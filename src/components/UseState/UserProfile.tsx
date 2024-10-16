import React, { useState } from 'react'
type Profile = {
    id:string
    name:string
    age:number
    loc:string
}
const profile:Profile = {
    id:'72326347r2364',
    name:'Amiyo maybe',
    age:25,
    loc:'dhaka bd',
}
const UserProfile = () => {
    const [profileInfo, setProfileInfo] = useState<Profile>()
  return (
    <div>
        <button onClick={()=>setProfileInfo(profile)}>Set Profile</button>
        
      {
        profileInfo ? 
        <div>
            <p>{profileInfo?.id}</p>
            <p>{profileInfo?.name}</p>
            <p>{profileInfo?.age}</p>
            <p>{profileInfo?.loc}</p>
        </div> : null
      }  
        
    </div>
  )
}

export default UserProfile
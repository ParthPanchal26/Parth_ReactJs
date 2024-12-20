import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext);

    if (!user) return <h2>No User Found!</h2>
    
    return <h2>Welcome {user.username}</h2>

}

export default Profile
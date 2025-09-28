import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
 if(loggedIn && isAdmin){
    return <h1>Welcome Admin</h1>
 } else if(loggedIn){
    return <h1>Welcome User</h1>
 }
 return <h1>Not Logged in</h1>
}

export default UserStatus

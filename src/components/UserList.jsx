import React from 'react'

const UserList = () => {

    const users = [
        { id: 1, name: "Kunal", age: 22 },
        { id: 2, name: "Sandeep", age: 20},
        { id: 3, name: "Data", age: 21}
    ]
  return (
    <div>
      {users.map((user)=> (
        <div key={user.id}>
            <h1>Id: {user.id}</h1>
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
        </div>
      ))}
    </div>
  )
}

export default UserList

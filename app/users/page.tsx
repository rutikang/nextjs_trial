import React from 'react'

interface User {
    id: number,
    name : string,
    email : string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}  )    // {next: {revalidate:10}})    // catching get fresh data every 10 seconds // axios cant do this 
    const users : User[]= await res.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
        {users.map(user => <tr key={user.id}>
            <th>{user.name}</th>
            <th>{user.email}</th>
             </tr>)}
        </tbody>
    </table>
    </>    
  )
}

export default UsersPage
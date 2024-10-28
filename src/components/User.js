import React from 'react'
import { UseUserContext } from '../Hooks/UseUserContext'

const User = ({user}) => {
    const {id, name} = user

    const {users, setUsers}= UseUserContext()

    const handleDelete = (id) =>{
        const filteredUser = users.filter(user=> user.id!==id)
        setUsers(filteredUser)
    }
  return (
    <article className='user'>
      <h2>{id}</h2>
      <p>{name}</p>
      <button onClick={()=>{
        handleDelete(id)
      }}>Delete!</button>
    </article>
  )
}

export default User
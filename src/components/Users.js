import React from 'react'
import User from './User'
import { UseUserContext } from '../Hooks/UseUserContext'

const Users = () => {
    const {users} = UseUserContext()
  
  return (
    <section className='users'>
      {users.map((user)=><User user={user} key={user.id} />)}
    </section>
  )
}

export default Users
import React, {   useState } from 'react'
import { UseUserContext } from '../Hooks/UseUserContext'

const NewUser = () => {

    const { setUsers} = UseUserContext()
    const [newUser, setNewUser]=useState('')
    const handleChange = (e) =>{
        setNewUser(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const noaUser = {id: new Date().getTime().toString(), name: newUser}
        setUsers(prevUsers => [ ...prevUsers, noaUser])
        setNewUser('')
    }
  return (
    <div>
        <h2>User Management App</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' value={newUser} onChange={handleChange} required/>
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default NewUser
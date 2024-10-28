import React from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import UserProvider from './userContext/UserContext';
function App() {

  return (
    <UserProvider>
    <div>
      <NewUser />
      <Users />
    </div>
    </UserProvider>
    
  );
}

export default App;

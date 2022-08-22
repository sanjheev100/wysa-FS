import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({})
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserState = () => {
  return useContext(UserContext)
}

export default UserProvider

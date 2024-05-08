import React, {useState } from 'react'
import { createContext } from 'react'
export const AppContext = createContext()
const ParentContext = ({ children }) => {
const [userId, setUserId] = useState("")

  return <AppContext.Provider value={{ userId,setUserId}} >
    {children}
  </AppContext.Provider>
}

export default ParentContext
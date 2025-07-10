import React, { createContext } from 'react'
const appContext = createContext()
export default function AppContext({children}) {
  return (
    <appContext.Provider>
        {children}
    </appContext.Provider>
  )
}

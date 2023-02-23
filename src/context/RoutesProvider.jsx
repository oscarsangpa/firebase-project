import {createContext, useState} from 'react'

const RoutesContext = createContext()

export function RoutesProvider( {children} ) {
    const [route, setRoute] = useState("home")

  return (
    <RoutesContext.Provider
        value={{
            route,
            setRoute
        }}
    >
        {children}
    </RoutesContext.Provider>
  )
}

export default RoutesContext


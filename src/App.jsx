import { useState } from "react";
import {app } from "./firebase"
import Header from "./components/Header";
import Home from "./routes/Home"
import Login from "./routes/Login"
import {useRoute} from "./hooks/useRoutes"

function App() {
  const { route, setRoute} = useRoute()
  return (
    <>
    <Header/>
    <main className="p-6">
     {route === "home" && <Home/>}
     {route === "login" && <Login/>}
    </main>
    </>
  
  )
}

export default App;


import {SiFirebase} from "react-icons/si"
import { useRoute } from "../hooks/useRoutes"

export default function Header() {
    const {setRoute} = useRoute()
    return (
        <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8">
            <div
            onClick={()=> setRoute("home")} 
            className="flex items-center gap-1 cursor-pointer">
                <SiFirebase className="text-2xl text-yellow-400" />
                <p className="text-xl text-yellow-400 font-semibold">FireProject</p>
            </div>
            <button 
                className="bg-sky-600 text-gray-50 px-5 py-1 rounded hover:bg-sky-800 transition"
                onClick={() => setRoute("login")}
                >
                Login
            </button>

        </header>
    )
}


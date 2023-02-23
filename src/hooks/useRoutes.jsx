import { useContext } from "react";
import RoutesProvider from "../context/RoutesProvider";

export const useRoute = () => {
    return useContext(RoutesProvider)
}


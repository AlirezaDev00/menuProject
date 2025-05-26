import { Navigate } from "react-router-dom"
import Main from "./Components/Main/Main"

const router = [
    { path: "/menu/:category", element: <Main></Main> },
    {path: "*" , element: <Navigate to="/menu/all"></Navigate>},
]

export default router
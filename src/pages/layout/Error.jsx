import { useRouteError, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext";

export const Error = () => {
    const { type, error } = useRouteError()
    const navigate = useNavigate()
    const { authorizator } = useAuthContext()

    const handleRegrantClick = () => {
        if (type === "permission") {
            authorizator.incremental('https://www.googleapis.com/auth/gmail.compose', (permissions, token) => {
                console.log("Incremental Successfully: permissions:", permissions, token)
            })
        }
    }

    return (
        <span className='text-lg flex flex-col justify-center w-full h-full'>
            <span className="font-bold">{error.title}</span>
            <br></br>
            <span className="italic">{error.message}</span>
            <br></br>
            {type === "permission" && <button className="btn w-fit" onClick={handleRegrantClick}>Regrant Permission</button>}
        </span>
    )
}

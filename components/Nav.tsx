import Login from "./auth/Login";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default async function Nav({data}: any){
    const session = await getServerSession(authOptions as any);
    console.log('SESSION-LOGIN', session)
    return(
        <Login session={session}/>
    )
}
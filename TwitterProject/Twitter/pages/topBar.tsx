import { useSession, signOut } from "next-auth/react"

export default function topBar() {
  const { data: session } = useSession()
  return (
    <div>
        <div className="flex items-center sm:space-x-80 px-5 py-2 my-5 rounded-full bg-gradient-to-t from-blue-500 to-blue-400">
            <div className="flex items-center">    
                <img className="w-16 rounded-full" src={session?.user?.image}/>
                <div className="pl-4">
                    <h1 className="font-bold">{session?.user?.name}</h1>
                    <p className="italic">{session?.user?.email}</p>
                </div>
            </div>

            <button onClick={() => signOut()} className="py-2 px-7 ml-5 rounded-full bg-black hover:shadow-xl shadow-black hover:bg-gradient-to-t from-blue-600 to-blue-500 text-white">Sair</button>

        </div>
    </div>
  )
}



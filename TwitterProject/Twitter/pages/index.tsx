import Content from './content';
import TextContainer from './textcontainer';
import TopBar from './topBar';

import { useSession, signIn } from "next-auth/react"
import Backtotop from './backtotop';

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className="flex flex-col items-center min-h-screen pb-28">
            <TopBar/>
            <TextContainer />
            <Content />
            <Backtotop />
        </div>
        
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
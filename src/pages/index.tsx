import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRouter as newUseRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const newRouter = newUseRouter()

  const goToAboutPageHandler = () => {
    router.push('/about')
  }

  const goToAbout2PageHandler = () => {
    newRouter.push('/about2')
  }

  return (
    <div>
      <h1>This is Home Page</h1>
      <div onClick={goToAboutPageHandler}>Go to About Page</div>
      <div onClick={goToAbout2PageHandler}>Go to About2 Page</div>
    </div>
  )
}

Home.getInitialProps = async function (appContext: any) {
  console.log('appContext', appContext);

  return {
    
  }
}

import Head from 'next/head';  
import HomePage from './homePage'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>CICD</title>
        <meta name="CICD" content="See, I compute!" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}

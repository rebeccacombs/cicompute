import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <div className="flex flex-col h-screen">
  <Navbar/>
  <main className="flex-grow">
  <Component {...pageProps} />
  </main>
  <Footer/>
  </div>
  </> 
}

export default MyApp

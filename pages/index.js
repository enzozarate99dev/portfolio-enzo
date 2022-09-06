
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Enzo Z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
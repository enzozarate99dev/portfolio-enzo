

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import BackgroundEffect from '../utils/BackgroundEffect'

const Home = () => {
  
  return (
    <div className="">
      <Head>
        <title>Enzo Z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundEffect/>
      <Navbar />
      <Main />
      <Projects />
      {/* <About /> */}
      <Skills />
      <Contact />
    </div>
  )
}

export default Home

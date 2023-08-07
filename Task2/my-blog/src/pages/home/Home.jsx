import Aboutsection from '../../components/aboutsection/Aboutsection'
import Header from '../../components/header/Header'
import './home.css'
import Projects from '../../components/projects/Projects'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (

    <>
      <Header/>
      <div className='home'>
        <Projects/>
        <Aboutsection/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    
    </>
  )
}

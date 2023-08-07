import './about.css'
import { Back } from '../../components/common/back/Back'
import Footer from '../../components/footer/Footer'
const pdf_file='http://localhost:3000/Resume.pdf'
export default function About() {
    const downloadUrl=(url) => {
        const fileName=url.split('/').pop();
        const aTag=document.createElement('a')
        aTag.href=url;
        aTag.setAttribute('downloaf',fileName)
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove(); 
    }
    return (
        <>
        <Back title="About Me"/>
        <div className='about'>
            <div className="aboutItem">
                <span className="aboutTitle">
                    About Me
                </span>
                <div className="profile">
                    
                </div>
                <p>Hello! My self Avinash Chaudhary a B.Tech Computer Science Engineering student.
                    I am a full
                    stack software developer with expertise in creating and designing web projects. Highly experienced in
                    developing innovative designs and software.
                    I am a Footbal player and a sketch artist, loves to scribble,write poems and play games.</p>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">
                    Follow Me
                </span>
                <div className="aboutSocial">
                    <i className="aboutIcon fa-brands fa-facebook-f"></i>
                    <i className="aboutIcon fa-brands fa-instagram"></i>
                    <a href="https://github.com/Avinash227842" className='extlink'>
                    <i className="aboutIcon fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/avinash-chaudhary-8a2004222" className='extlink'>
                    <i className="aboutIcon fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">
                    Resume
                </span>
                <div className="resumeButton">
                    <button onClick={() => {downloadUrl(pdf_file)}}>Download Here</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

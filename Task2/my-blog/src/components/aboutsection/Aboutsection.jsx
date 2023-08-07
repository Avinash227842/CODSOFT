import './aboutsection.css'

export default function Aboutsection() {
    return (
        <>
            
        <div className='aboutsection'>
            <div className="aboutsectionItem">
                <span className="aboutsectionTitle">
                    About Me
                </span>
                <div className="profileicon">
                    
                </div>
                <p>Hello! My self Avinash Chaudhary a B.Tech Computer Science Engineering student.
                    I am a full
                    stack software developer with expertise in creating and designing web projects. Highly experienced in
                    developing innovative designs and software.
                    I am a Footbal player and a sketch artist, loves to scribble,write poems and play games.</p>
            </div>
            <div className="aboutsectionItem">
                <span className="aboutsectionCategories">My Skills</span>
                <ul className="aboutsectionList">
                    <li className="aboutsectionListItem">C/C++</li>
                    <li className="aboutsectionListItem">Front End</li>
                    <li className="aboutsectionListItem">React Js</li>
                    <li className="aboutsectionListItem">Node JS</li>
                    <li className="aboutsectionListItem">Flutter</li>
                    <li className="aboutsectionListItem">Java</li>
                    <li className="aboutsectionListItem">Content Writting</li>
                    <li className="aboutsectionListItem">MongodB</li>
                    <li className="aboutsectionListItem">API handling</li>
                    <li className="aboutsectionListItem">Python</li>
                </ul>
            </div>
            <div className="aboutsectionItem">
                <span className="aboutsectionTitle">
                    Follow Me
                </span>
                <div className="aboutsectionSocial">
                    <i className="aboutsectionIcon fa-brands fa-facebook-f"></i>
                    <i className="aboutsectionIcon fa-brands fa-instagram"></i>
                    <a href="https://github.com/Avinash227842" className='extlink'>
                    <i className="aboutIcon fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/avinash-chaudhary-8a2004222" className='extlink'>
                    <i className="aboutIcon fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

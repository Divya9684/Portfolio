import './About.css'
import profile_img from '../../assets/profile_img_1.jpg'
import theme_img from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_img} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a Frontend Developer. I recently done and internship in HashedBit Innovations as a Frontend Developer.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience bot also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:'70%'}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:'50%'}}/></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
      <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100+</h1>
          <p>PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>CERTIFICATES ACHIEVED</p>
        </div>
      </div>
    </div>
  )
}

export default About

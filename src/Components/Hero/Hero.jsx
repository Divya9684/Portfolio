import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I&apos;m Divya Bhavar,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from Nashik, India pursuing bachlour degree in computer science engineering at Sandip Institute of Technology and Research Center, Nashik.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume">
          <a href={resume} download="Divya_Bhavar_Resume.pdf">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero

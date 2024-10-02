import './MyWork.css'
import theme_img from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_img} alt="Theme" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  )
}

export default MyWork;

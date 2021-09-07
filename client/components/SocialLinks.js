import {RiLinkedinLine, RiGithubLine} from 'react-icons/ri'
import {AiOutlineMedium, AiOutlineFile} from 'react-icons/ai'


export default function SocialLinks({hasResume=false}){
   return (
    <div className='about-links-wrapper'>
        <a className='social-icon' href='https://www.linkedin.com/in/rachelrly/'>
            <RiLinkedinLine />
        </a>
        <a className="social-icon" href='https://rachelrly.medium.com/'>
            <AiOutlineMedium/>
        </a>
        <a className='social-icon' href='https://github.com/rachelrly'>
            <RiGithubLine />
        </a>
        {hasResume && (
        <a className='social-icon' href='../assets/RachelReillyResume.pdf'>
            <AiOutlineFile />
        </a>)}
    </div>
    )
}


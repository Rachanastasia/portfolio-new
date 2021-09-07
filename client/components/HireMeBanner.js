import SocialLinks  from './SocialLinks'

export default function HireMeBanner(){
    return (
        <div className='hire-me-wrapper'>
            <div className='hire-me-banner'>
                <span>HIRE ME</span>
                <SocialLinks className='hire-me-links' />
            </div>
        </div>
    )
}
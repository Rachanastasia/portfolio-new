import Header from '../Header'
import IntroductoryParagraph from './IntroductoryParagraph'
import ExperienceParagraph from './ExperienceParagraph'
import SkillsParagraph from './SkillsParagraph'
import SelfPicture from './SelfPicture'

export default function Home(){
    return (
        <main>
            <Header />
            <div id="about">
                <IntroductoryParagraph />
                <SelfPicture />
                <SkillsParagraph />
                <ExperienceParagraph />
            </div>
        </main>
    )
}
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { AiOutlineMedium, AiOutlineFile } from "react-icons/ai";

export default function SocialLinks({ className }) {
  const wrapperClass = className + " about-links-wrapper";
  return (
    <div className={wrapperClass}>
      <a className="social-icon" alt="Rachel's LinkedIn profile" href="https://www.linkedin.com/in/rachelrly/">
        <RiLinkedinLine />
      </a>
      <a className="social-icon" alt="Rachel's Medium articles" href="https://rachelrly.medium.com/">
        <AiOutlineMedium />
      </a>
      <a className="social-icon" alt="Rachel's GitHub profile" href="https://github.com/rachelrly">
        <RiGithubLine />
      </a>
      <a
          className="social-icon"
          href="RachelReillyResume.pdf"
          alt="Rachel resume"
          download
        >
          <AiOutlineFile />
        </a>
    </div>
  );
}

import GithubLogo from "../images/github1.png"
import LinkedInLogo from "../images/linkedin1.png"

export default function Header()
{
    return(
        <header class="head">
        <div class="left-section"> 
            <div class="name-front">JR</div>
            <div class="name-hover-container">
                <div class="name-hover">Jash Rashne</div>
            </div>
        </div>
        <div class="right-section">
            <div class="resume-text">
                <a target="_blank" href="https://photos.app.goo.gl/HDqjWwai5uovtoyeA">Resume</a>
            </div>
            <div class="github-container">
                <a href="https://github.com/JashRashne" target="_blank">
                    <img class="github-logo" src={GithubLogo} alt=""></img>
                </a>
            </div>
            <div class="linkedin-container">
                <a href="https://in.linkedin.com/in/jashrashne" target="_blank">
                    <img class="linkedin-logo" src={LinkedInLogo} alt=""></img>
                </a>
            </div>
        </div>
    </header>
    )
}
import DownArrow from "../images/down-arrow.png"
export default function Bottom()
{
    return(
        <div class="projects-scroll-arrow">
            <p class="projects-text">Projects</p>
            <div class="down-arrow-container">
                <img class="down-arrow" src={DownArrow} alt=""></img>
            </div>
        </div>
    )
}
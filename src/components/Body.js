import MyBitmoji from "../images/jash.png"
export default function Body()
{
    return(
        <div class="page-body">
            <div class="intro-text">
                <p class="intro-text-p">I create <span class="playful">playful</span> experiences</p>
                <p class="name-subtitle">music. code. cinema.</p>
            </div>
            <div class="intro-image">
                <img class="jash-pfp" src={MyBitmoji} alt="jashbhai"></img>
            </div>
        </div>    
    )
}
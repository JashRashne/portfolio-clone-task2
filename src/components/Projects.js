export default function Projects(props)
{
    const keysArray = Object.keys(props.item.languages);
    const langCount = keysArray.length;
    let i = 0;
    return(
        <div className="project-space">
            <div className="project">
                <div className="project-image-section">
                    <img className="project-image" src={props.item.coverImg}></img>
                </div>
                <div className="project-info-section">
                    <div className="project-title">{props.item.title}</div>
                    <div className="project-description">{props.item.description}</div>
                    <div className="language-used">
                        <button className="language-name">HTML</button>
                        <button className="language-name">CSS</button>
                        <button className="language-name">JS</button>
                    </div>
                    <div className="view-code-section">
                        <button className="view-code">VIEW CODE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

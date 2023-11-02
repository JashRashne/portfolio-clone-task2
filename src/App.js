import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header"
import Body from "../src/components/Body"
import Bottom from "../src/components/Bottom"
import Projects from "../src/components/Projects"
import Data from "../src/ProjectData"


function App() {
  const projs=Data.map(item => {
    return(
      <Projects
        item = {item}
      />
    )
  
})
  return (
    <div>
      < Header/>
      <Body />
      <Bottom />
      {projs}
    </div>
  );
}

export default App;

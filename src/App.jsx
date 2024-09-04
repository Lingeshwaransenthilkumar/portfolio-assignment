import Gallery from "../components/gallery/gallery";
import Intro from "../components/intro/intro";
import Main from "../components/main/Main_content";
import "./App.css";

function App(){
  return(
    <>
      <div className="portfolio">
        <div className="left-section">
          <Main/>
        </div>
        <div className="right-section">
          <Intro />
          <Gallery />
        </div>
      </div>
    </>
  )
}

export default App;
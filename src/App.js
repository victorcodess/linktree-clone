import './App.css';
import Card from "./Card"

function App() {
  return (
    <div className="App">
    <div className="profile-section">
      <img src={require("./square.png")} alt="profile" id='profile_img'/>
      <h2>@victorwill__</h2>
      <p id="slack"></p>
    </div>

    <Card 
      title = "Twitter Link"
      link = "https://twitter.com/victorwill__"
      id = "twitter"
    />
    <Card 
      title = "Zuri Team"
      link = "https://twitter.com/victorwill__"
      id = "btn_zuri"
    />
    <Card 
      title = "Zuri Books"
      link = "http://books.zuri.team"
      id = "books"
    />
    <Card 
      title = "Python Books"
      link = "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
      id = "book_python"
    />
    <Card 
      title = "Background Check for Coders"
      link = "https://background.zuri.team"
      id = "pitch"
    />
    <Card 
      title = "Design Books"
      link = "https://books.zuri.team/design-rules"
      id = "book_design"
    />
    
    <div className="social-links">
    <a href= "https://app.slack.com/" target= "_blank" rel= "noreferrer"><img src={require("./slack.png")} alt="slack" /></a>
    <a href= "https://github.com/victorcodess" target= "_blank" rel= "noreferrer"><img src={require("./Icon.png")} alt="github" /></a>
    </div>

    <footer>
      <a href=""><img src={require("./Zuri.Internship_Logo.png")} alt="" /></a>
      <a href=""><img src={require("./I4G.png")} alt="" /></a>

    </footer>

    </div>
  );
}

export default App;

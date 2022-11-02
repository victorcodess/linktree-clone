import './App.css';
import Card from "./Card"

function App() {
  return (
    <div className="App">
    <div className="profile_section">
      <img src={require("./square.png")} alt="profile" id='profile_img'/>
      <img src={require("./_Avatar share button.png")} alt="share" id='share_btn'/>
      <h2>@victorwill__</h2>
      <p id="slack">victorwill</p>
    </div>

    <div className="card_section">
    <Card 
      title = "Twitter Link"
      link = "https://twitter.com/victorwill__"
      id = "twitter"
      subText = ""
    />
    <Card 
      title = "Zuri Team"
      link = "https://twitter.com/victorwill__"
      id = "btn_zuri"
      subText = ""
    />
    <Card 
      title = "Zuri Books"
      link = "http://books.zuri.team"
      id = "books"
      subText = "This is where you find books about design and coding"
    />
    <Card 
      title = "Python Books"
      link = "https://books.zuri.team/python-for-beginners?ref_id=victorwill"
      id = "book_python"
      subText = "This are the best selling book to learn python made by Zuri"
    />
    <Card 
      title = "Background Check for Coders"
      link = "https://background.zuri.team"
      id = "pitch"
      subText = "This is a free service for doing background check on coders made by Zuri"
    />
    <Card 
      title = "Design Books"
      link = "https://books.zuri.team/design-rules"
      id = "book_design"
      subText = "This is a free design book offered by Zuri"
    />
    </div>

    <div className="social_links">
    <a href= "https://app.slack.com/" target= "_blank" rel= "noreferrer"><img src={require("./slack.png")} alt="slack" /></a>
    <a href= "https://github.com/victorcodess" target= "_blank" rel= "noreferrer"><img src={require("./Icon.png")} alt="github" /></a>
    </div>   

    <footer>
    <div className="footer_section">
      <a href="https://internship.zuri.team/"><img src={require("./Zuri.Internship_Logo.png")} alt="" /></a>
      <p>HNG Internship 9 Frontend Task</p>
      <a href="https://ingressive.org/"><img src={require("./I4G.png")} alt="" /></a>
    </div>
    </footer>
    

    </div>
  );
}

export default App;

import './App.css';
import Card from "./Card"

function App() {
  return (
    <div className="App">
    <div className="profile-section">
      <img src="../public/square.png" alt="profile" id='profile_img'/>
      <h2>Victor Williams</h2>
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
    

    </div>
  );
}

export default App;

import './App.css';
import Card from "./Card"

function App() {
  return (
    <div className="App">
    <div className="profile-section">
      <img src="../public/square.png" alt="profile" />
      <h2>Victor Williams</h2>
    </div>

    <Card 
      title = "Twitter"
      link = "https://twitter.com/victorwill__"
    />
    

    </div>
  );
}

export default App;

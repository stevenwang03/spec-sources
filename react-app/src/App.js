import logo from './logo.svg';
import './App.css';
import Block from './Components/Block';
import List from './Components/List';

function App() {
  return (
    <><div class="logo">
      <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png"></img>
    </div><div>
        <h1 class="title">Spectator's Sources</h1>

      <Block/>
      
      </div>
      <div class="space-white">
        <List/>
      </div></>
  );
}

export default App;

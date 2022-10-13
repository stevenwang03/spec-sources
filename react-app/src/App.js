import logo from './logo.svg';
import './App.css';
import Block from './Components/Block';
import List from './Components/List';
import React, {useState} from 'react';

const initialList = [{sourceName:"Presbo", sourceEmail: "presbo@columbia.edu"}, 
                    {sourceName:"John Jay Mouse", sourceEmail: "mouse@columbia.edu"}, 
                    {sourceName:"Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

function App() {
  const [sourceList, setSourceList] = useState(initialList);

  function handleDelete(index) {
    const updatedList = sourceList.slice(0, index - 1).concat(sourceList.slice(index));

    setSourceList(updatedList);
  }

  function handleAdd() {

  }
  
  return (
    <><div class="logo">
      <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png"></img>
    </div><div>
        <h1 class="title">Spectator's Sources</h1>

      <Block/>
      
      </div>
      <div class="space-white">
        <List sourceList={sourceList} handleDelete={handleDelete} ></List>
      </div></>
  );
}

export default App;

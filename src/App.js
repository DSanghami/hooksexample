import logo from './logo.svg';

import './App.css';

import { useState , useEffect} from 'react';

function App() {

 

  const [visitorCount , setVisitorCount ] = useState(1);
  //tHIS ARROW WILL EXECUTE in all 3 phases, viz, Mounting
  // Updting and Unmounting phases, useEffect hook introduces all
  //the 3 phases for this functional component.
  
  const displayStatus = ()=>{
    console.log("Visitor count incremented"  + visitorCount);
    //setVisitorCount(visitorCount + 1);
    
};

// ReactJS implements an observer which observes the changes for the 
// visitorCount and if visitorCount changes, it automatically calls
// that function
useEffect(displayStatus, [visitorCount])
  const updateVisitorCount = () =>

  {

    setVisitorCount(visitorCount+1);

  }

   return (

    <center>

  <div className="App">

      <form>

        <input type='button' onClick={updateVisitorCount} value="update Vistor" /> <br />

        <b>You are Vistor </b> {visitorCount}

      </form>

    </div>

    </center>

 

  );

}

 

export default App;

 
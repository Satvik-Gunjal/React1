import './App.css';
import Screen from './components/Screen';
import React,{ useState} from "react";
import Inputbox from './components/Inputbox';

const App=()=> {
 const [markuplang, setMarkuplang] = useState("")
  return (
    <div style={{display:"flex"}}>
     <Inputbox setdatafn = {setMarkuplang}></Inputbox>

     <Screen markupdata={markuplang}> </Screen>
    </div>
  );
}

export default App;

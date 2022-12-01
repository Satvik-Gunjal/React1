import './App.css';
import Img from "./components/logo192.png"
import Img2 from "./components/logo192.png"
import Card from './components/Card';

function App() {
 
  return(
  
        <>
         <div className="App">
         <Card movie="IRONMAN" yearAndAuthor="2008,Satvik" images={Img} />
        <Card
           movie="HARRY POTTER"
              yearAndAuthor="2000,Satvik"
      images={Img2}
            />
            
       </div>
           
        </>
        );
}

export default App;

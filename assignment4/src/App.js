import Card from './components/Card';
import './App.css';


function App() {

    const main_styling = {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "0.1rem",
    };
      return(
          <>
          <div style={main_styling}>
            <Card title="#FF6663" color="Pink" hashcode="PINK" />
            <Card title="#333333" color="Gray" hashcode="#333333" />
            <Card title="#38DB25" color="Green" hashcode="#38DB25" />
            <Card title="#38BB14" color="Light Green" hashcode="#38BB14" />
            <Card title="#C90B0B" color="Red" hashcode="#C90B0B" />
          </div>
      
          <div style={main_styling}>
            <Card title="#FF8000" color="Orange" hashcode="#FF8000" />
            <Card title="#FFf500" color="Yellow" hashcode="#FFf500" />
            <Card title="#CCCCCC" color="Light gray" hashcode="#CCCCCC" />
            <Card title="#7E41A2" color="Voilet" hashcode="#7E41A2" />
            <Card title="#C14911" color="Marun" hashcode="#C14911" />
          </div>
        </>
      );
  
}

export default App;

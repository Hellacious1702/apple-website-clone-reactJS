import './App.css';
import Footer from './Components/Footer';
import Homepagesection1 from './Components/Homepagesection1';
import Homepagesection2 from './Components/Homepagesection2';
import Homepagesection3 from './Components/Homepagesection3';
import Homepagesection4 from './Components/Homepagesection4';
import Navbar from './Components/Navbar';
import Offerbanner from './Components/Offerbanner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Offerbanner/>
      <Homepagesection1/>
      <Homepagesection2/>
      <Homepagesection3/>
      <Homepagesection4/>
      <Footer/>
    </div>
  );
}

export default App;

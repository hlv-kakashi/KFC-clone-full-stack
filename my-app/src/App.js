import './App.css';
import FindKFC from './components/FindKFC/FindKFC';
import {Footer} from './components/footer/Footer';
import { FixedNavbar } from './components/navbar/FixedNavbar';
import Temp from './components/Temp';

function App() {
  return (
    <div className="App">

      <FixedNavbar/>

      <FindKFC/>

      <Footer/>
      {/* <Temp/> */}
    </div>
  );
}

export default App;

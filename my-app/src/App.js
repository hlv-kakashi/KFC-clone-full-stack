import './App.css';
import FindKFC from './components/FindKFC/FindKFC';
import {Footer} from './components/footer/Footer';
import { FixedNavbar } from './components/navbar/FixedNavbar';

function App() {
  return (
    <div className="App">

      <FixedNavbar/>

      <FindKFC/>

      <Footer/>
    </div>
  );
}

export default App;

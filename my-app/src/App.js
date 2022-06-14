import './App.css';
import {Footer} from './components/footer/Footer';
import { FixedNavbar } from './components/navbar/FixedNavbar';

function App() {
  return (
    <div className="App">
      <FixedNavbar/>
      <Footer/>
    </div>
  );
}

export default App;

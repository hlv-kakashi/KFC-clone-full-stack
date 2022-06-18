import FindKFC from './main_components/FindKFC/FindKFC';
import {Footer} from './main_components/footer/Footer';
import { FixedNavbar } from './main_components/navbar/FixedNavbar';

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

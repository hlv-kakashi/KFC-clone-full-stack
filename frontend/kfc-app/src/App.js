import MainRoutes from './routes/MainRoutes';
import { FixedNavbar } from './main_components/navbar/FixedNavbar';
import {Footer} from './main_components/footer/Footer';
function App() {
  return (
    <div>
     <FixedNavbar/>
     <MainRoutes/>
     <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Aboutus from './Components/Aboutus';
import List from './Components/List';
import Details from './Components/Details';
import { Provider } from 'react-redux';
import store from './store';
import CallMe from './Components/CallMe';
import Checkout from './Components/Checkout';
import Invoice from './Components/Invoice';
import Fix from './Components/Fix';
import Details2 from './Components/Details2';

function App() {
  return (
      <Provider store={store}>
   <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/callme' element={<CallMe/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/fix' element={<Fix/>}/>
        <Route path='/details2' element={<Details2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;

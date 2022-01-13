// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from './home/homepage';
import Dashboard from './home/dashboard';
import Heroes from './heroes/heroes';
import Bollywood from './heroes/bollywood';
import Hollywood from './heroes/hollywood'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route exact path='Dashboard' element={<Dashboard />}></Route>
        <Route exact path='Heroes' element={<Heroes />}></Route>
        <Route exact path='Bollywood' element={<Bollywood />}></Route>
        <Route exact path='Hollywood' element={<Hollywood />}></Route>

        


        </Routes>
      </Router>
    </>
      // <Homepage />
  );
}

export default App;


import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Homes from './pages/Homes';
import product from './pages/product';
import about from './pages/aboutus';

function App() {
  return (<div>    <Router>
      <Navbar></Navbar>
      <switch>
        <Route path='/' exact component={Homes} />
        <Route path='/product' exact component={product} />
        <Route path='/About-us' exact component={about} />
      </switch>


    </Router>
   
    </div>

  );
}

export default App;

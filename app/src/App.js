
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Link , Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
       <Route path="/home" exact component={HomeScreen} />

      </BrowserRouter>
     </div>
  );
}

export default App;

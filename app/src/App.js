
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Link , Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';


function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/book/:roomid" exact component={BookingScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;

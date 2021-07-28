
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Link , Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/book/:roomid" exact component={BookingScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;

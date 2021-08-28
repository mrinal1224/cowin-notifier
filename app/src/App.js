
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route} from "react-router-dom"
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserProfile from './screens/UserProfile';


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/profile" exact component={UserProfile} />
      </BrowserRouter>
    </div>
  );
}

export default App;

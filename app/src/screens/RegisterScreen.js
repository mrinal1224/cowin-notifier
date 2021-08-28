import React , {useEffect,useState} from 'react'
import axios from 'axios'
import Success from '../components/Success'
import Loader from '../components/Loader'
import Error from '../components/Error'

import geolocation from "geolocation";



function RegisterScreen() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [cpassword, setCpassword] = useState('');
      const [age , setAge] = useState()
      const [loading, setLoading] = useState(false);
      const [latitude, setLatitude] = useState(0);
      const [longitude, setLongitude] = useState(0);
      const[success , setSuccess] = useState()
      const [error, setError] = useState();

      geolocation.getCurrentPosition(function (err, position) {
        if (err) throw err;
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

   

     



        const regiterUser= async()=>{
         if (password === cpassword) {
           const user = {
             name,
             email,
             age,
             password,
             cpassword,
             latitude,
             longitude
           };
           try {
             setLoading(true)
             const result = await axios.post('/api/users/register', user).data
             setLoading(false)
             setSuccess(true)
             setName('')
             setEmail('')
             setAge()
             setPassword('')
             setCpassword('')
             
           } catch (error) {
             console.log(error)
             setLoading(false)
             setError(true)
           }
           
         } else {
           alert("password did not match");
         }
      }
      
     



    return (
      <>
        {loading && <Loader />}
        {error && <Error />}

        <div className="login">
          <div className="loginContainer">
            {success && (
              <Success message="Registration Successfull! Welcome to cowin notifier🙏" />
            )}
            <h1 className="heading">
              <i class="fas fa-hotel" aria-hidden="true"></i> Register with
              cowin notifier <i class="fa fa-map-marker" aria-hidden="true"></i>
            </h1>
            <label>
              <i class="fas fa-user" aria-hidden="false"></i> Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label>
              <i class="fa fa-envelope" aria-hidden="true"></i> Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label>
              <i class="fa fa-envelope" aria-hidden="true"></i> Age
            </label>
            <input
              type="text"
              value = {age}
              placeholder="Enter Your Age in Number"
               onChange={(e) => {
                setAge(e.target.value);
              }}
            />

            <label>
              <i class="fas fa-key" aria-hidden="true"></i> Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>
              <i class="fas fa-check-double" aria-hidden="true"></i> Confirm
              Password
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button className="button_class" onClick={regiterUser}>
              Register
            </button>
          </div>
        </div>
      </>
    );
}

export default RegisterScreen

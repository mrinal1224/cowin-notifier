import React , {useState , useEffect} from 'react'
import axios from 'axios'

function RegisterScreen() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [cpassword, setCpassword] = useState("");
      

      const regiterUser= async()=>{
         if (password === cpassword) {
           const user = {
             name,
             email,
             password,
             cpassword,
           };
           try {
             const result = await axios.post('/api/users/register', user).data
           } catch (error) {
             console.log(error)
           }
           
         } else {
           alert("password did not match");
         }
      }
      
     



    return (
      <>
        <div className="login">
          <div className="loginContainer">
            <h1 className="heading">
              <i class="fas fa-hotel" aria-hidden="true"></i> Register with
              Quick Rooms <i class="fa fa-map-marker" aria-hidden="true"></i>
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

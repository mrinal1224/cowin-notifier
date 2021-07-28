import React , {useState , useEffect} from 'react'

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser =()=>{
    const user={
        email,
        password
    }
    console.log(user)
  }
    return (
      <>
        <div className="login">
          <div className="loginContainer">
            <h1 className="heading">
              <i class="fas fa-hotel" aria-hidden="true"></i> Login to Quick
              Rooms <i class="fa fa-map-marker" aria-hidden="true"></i>
            </h1>

            <label>
              <i class="fa fa-envelope" aria-hidden="true"></i> Email
            </label>
            <input
              type="text"
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
              type="text"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="button_class" onClick={loginUser}>
              Login
            </button>
          </div>
        </div>
      </>
    );
}

export default LoginScreen

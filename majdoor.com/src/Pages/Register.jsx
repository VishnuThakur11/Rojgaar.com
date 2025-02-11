import Login from "./Login"
import "./login.css"
const Register = () => {
  return (
    <div>
      <div className="login-body">
        <div className="container" id="container">

          <div className="form-container signup">
            <form action="">
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registeration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button >Sign Up</button>
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                
                <button className="hidden" id="login">Sign In</button>
              </div>

              <div className="toggle-panel toggle-right">
              Already a user?
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="register">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <Login /> */}

    </div>
  )
}

export default Register
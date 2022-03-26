import "./App.css";
// rfc
import { FaFacebookSquare } from "react-icons/fa";
import appstore from "./appstore.png";
import googleplay from "./googlelay.png";
import instagram from "./instagram.png";
import mobile from "./mobile.png";

function App() {
  return (
    <div className="App">
      <img className="mobile_" src={mobile} alt="" />
      <div className="login_container">
        <div className="logo">
          <img src={instagram} alt="" />
        </div>
        <input type="email" placeholder="Phone number, username, or email" />
        <input type="password" placeholder="password" />
        <input className="login" type="button" value="Log In" />
        <div className="or_container">
          <div className="line"></div>
          <span>OR</span>
          <div className="line"></div>
        </div>
        <div className="facebook_btn">
          <FaFacebookSquare />
          <h4>Log in with Facebook</h4>
        </div>

        <a className="forgot" href="">
          Forget Password?
        </a>
        <div className="signup">
          <span>Don't have an account?</span>
          <a href="">Sign up</a>
        </div>

        <h5>Get the app.</h5>
        <div className="getheapp">
          <img src={googleplay} alt="" />
          <img src={googleplay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from "./img/logo.png";
import avatar from "./img/ebba.jpg";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="cover">
      <div className="toolbar_container">
        <h3>Day 1</h3>
        <div className="toolbar">
          <a>Gmail</a>
          <a>Images</a>
          <CgMenuGridO className="menu" />
          <img src={avatar} alt="" srcset="" />
        </div>
      </div>

      <div className="main">
        <img src={logo} alt="google logo" />
        <div className="search_input">
          <AiOutlineSearch />
          <input type="text" className="search_" />
          <BsMicFill />
        </div>

        <div className="buttons">
          <input type="button" value="Google search" />
          <input type="button" value="I'm Feeling Lucky" />
        </div>
        <div className="google_offer">
          <h4>Google offered in: </h4>
          <a href="">አማርኛ</a>
          <a href="">ትግርኛ</a>
          <a href="">Soomaali</a>
          <a href="">Afaan Oromoo</a>
        </div>
      </div>
    </div>
  );
}

export default App;

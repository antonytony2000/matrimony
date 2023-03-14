import "./App.css";
import logo from "./images/logo.svg";
import b1 from "./images/b1.webp";
import b2 from "./images/b2.webp";
import b3 from "./images/b3.webp";
import b4 from "./images/b4.webp";
import b5 from "./images/b5.webp";
import bg from "./images/bg.webp";

export default function App() {
  return <>

    <div className="home_row1">
      <div className="home_row1_left">
        <img src={logo} />
        <div className="home_row1_left_text">
          <label>ChristianMatrimony.com</label>
          <label>From Matrimony.com Group</label>
        </div>
      </div>
      <div className="home_row1_right">
        <label>Already a member?</label>
        <button>Log In</button>
      </div>
    </div>

    <div className="home_row2" style={{ backgroundImage: `url(${bg})` }}>
      <div className="home_row2_inner">
        <label>No. 1 and official matrimony service exclusively for Christians</label>
        <label>Meet your Christian soulmate here!</label>
        <div className="home_row2_inner_row3">
          <div className="home_row2_inner_row3_1">
            <label><span>Matrimony Profile For</span></label>
            <select>
              <option>SELECT</option>
              <option>Self</option>
              <option>Relative</option>
              <option>Friend</option>
            </select>
          </div>
          <div className="home_row2_inner_row3_2">
            <label><span>Name</span></label>
            <input placeholder="Name" type={"text"} />
          </div>
          <div className="home_row2_inner_row3_3">
            <label>Mobile Number</label>
            <input placeholder="Mobile Number" type={"text"} />
          </div>
          <button>Register Free</button>
        </div>
        <label className="home_row2_inner_row4">
          By clicking on Register Free, you agree to <span>Terms & Conditions</span>and<span>Privacy Policy</span></label>

      </div>
    </div>
    <div className="home_row3">
      <ul>
        <li>
          <div> <img src={b1} /></div>
          <label>10+ years of service in helping Christians cherish the meaning of Happy marriage</label>
        </li>
        <li>
          <div> <img src={b2} /></div>
          <label>2 Lakh+ people have found their life partner using our services</label>
        </li>
        <li>
          <div>  <img src={b3} /></div>
          <label>2020's winner of 'India's Growth Champions Award' by The Economic Times</label>
        </li>
        <li>
          <div> <img src={b4} /></div>
          <label>1 Lakh+ genuine profiles with 100% verified phone numbers</label>
        </li>
        <li>
          <div>   <img src={b5} /></div>
          <label>130+ branches across India to serve you better</label>
        </li>
      </ul>

    </div>
  </>
}
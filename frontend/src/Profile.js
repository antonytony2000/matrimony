import "./Profile.css";
import logo from "./images/logo.svg";
import profile from "./images/profile.webp";
import icon from "./images/icon.png";
import axios from "axios";
import { useEffect } from "react";
export default function Profile() {

  useEffect(()=>{
    let pid =localStorage.getItem("pid")
alert(pid)
    let url="http://localhost:8000/singleuser"
    let request={id:pid}
    let header = {}
  axios.post(url,request,header).then((res)=>{
    console.log(res.data)
  }).catch((err)=>{
console.log(err)
  })
  },[])
  return (
    <>
      <div className="Profile_row1">
        <img src={logo} />
        <ul>
          <li>MY HOME</li>
          <li>SEARCH</li>
          <li>MATCHES</li>
          <li>MAILBOX</li>
          <li>UPGRADE NOW</li>
        </ul>
        <img src={icon} />
      </div>
      <div className="Profile_row2">
        <div className="Profile_row2_col1">
          <div className="Profile_row2_1">
            <img src={profile} />
          </div>
          <div className="Profile_row2_2">
            <div className="Profile_row2_col1_row1">
              <h2>Aswathy AB</h2>
            </div>
            <div className="Profile_row2_col1_row2">
              <label>
                E5939741 | Profile created by Self | Active - 1 week ago
              </label>
            </div>
            <div className="Profile_row2_col1_row3">
              <label>
                <span>Verified</span>
              </label>
            </div>
            <div className="Profile_row2_col1_row4">
              <div className="Profile_row2_col1_row4_col1">
                <ul>
                  <li>27 years and 9 months, 4'7"</li>
                  <li>Mother Tongue is Malayalam</li>
                  <li>24 Manai Telugu Chettiyar</li>
                </ul>
              </div>
              <div className="Profile_row2_col1_row4_col2">
                <ul>
                  <li>Lives in Rangat</li>
                  <li>Studied B.A. Degree</li>
                  <li>Not working</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Profile_row2_col2">
          <h1>About Her</h1>
          <label>I belong to a middle class family with moderate values</label>
          <label>27 years and 9 months, 4'7"</label>
        </div>
      </div>
    </>
  );
}

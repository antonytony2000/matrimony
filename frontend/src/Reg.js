import "./Reg.css";
import logo from "./images/logo.svg";
import tick from "./images/tick.webp";
export default function App() {
    return <>
        <div className="register_row1">
            <img src={logo} />
            <div className="register_row1_text">
                <label>ChristianMatrimony.com</label>
                <label>From Matrimony.com Group</label>
            </div>
        </div>
        <div className="register_row2">
            <label>Great! You have completed <b>20%</b></label>
        </div>
        <div className="register_row3">
            <div className="register_row3_1">
                <div>
                    <img src={tick} />
                </div>
                <label>Trusted by Christians across the world!</label>
            </div>
            <div className="register_row3_2">
                <label className="register_row3_2_label1"> Please provide us with your basic details</label>
                <div className="register_row3_2_label2">
                    <label>Date of birth</label>
                    <input type={"text"} /></div>
                <div className="register_row3_2_label2">
                    <label>Denomination</label>
                    <input type={"text"} />
                    
                </div>
                <div className="register_row3_2_label2">
                    <label>Division</label>
                    <input type={"text"} />
                    
                </div>
                <div className="register_row3_2_label2">
                    <label>Subcaste (optional)</label>
                    <input type={"text"} />
                </div>
                <div className="register_row3_2_label2">
                    <label>Mother tongue</label>
                    <input type={"text"} />
                </div>
                <div className="register_row3_2_label2">
                    <label>Email id</label>
                    <input type={"text"} /></div>
                <div className=" register_row3_2_label2">
                    <label>Password</label>
                    <input type={"text"} /></div>
                <div className="register_row3_2_button"> <button>CONTINUE</button></div>
            </div>
        </div>
        <div className="register_row4">
            <label>Copyright © 2022. All rights reserved.</label>
        </div>

    </>
}
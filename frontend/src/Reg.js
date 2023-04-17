import "./Reg.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.svg";
import tick from "./images/tick.webp";
import { useState } from "react";
import axios from "axios";

export default function Reg() {
    const Navigate = useNavigate();
    const [dob, setdob] = useState("")
    const [div, setdiv] = useState("")
    const [regemail, setregemail] = useState("")
    const [regpw, setregpw] = useState("")
    const [deno, setdeno] = useState("")
    const [mottong, setmottong] = useState("")
    const [subcas, setsubcas] = useState("")
    const handleclick1 = () => {
        let url = "http://localhost:8000/Register"
        let request = { dtdob: dob, refCaste: subcas, refMothertongue: mottong, txtEmail: regemail, txtPassword: regpw }
        let header = {};
        axios.post(url, request, header).then((res) => {
            console.log(res.data)
            Navigate("/App")
        }).catch()
    }
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
                        <input type={"text"} onChange={(e) => { setdob(e.target.value) }} />
                        {dob}
                    </div>
                    <div className="register_row3_2_label2">
                        <label>Denomination</label>
                        <input type={"text"} onChange={(e) => { setdeno(e.target.value) }} />
                        {deno}
                    </div>
                    <div className="register_row3_2_label2">
                        <label>Division</label>
                        <input type={"text"} onChange={(e) => { setdiv(e.target.value) }} />
                        {div}
                    </div>
                    <div className="register_row3_2_label2">
                        <label>Subcaste (optional)</label>
                        <input type={"text"} onChange={(e) => { setsubcas(e.target.value) }} />
                        {subcas}
                    </div>
                    <div className="register_row3_2_label2">
                        <label>Mother tongue</label>
                        <input type={"text"} onChange={(e) => { setmottong(e.target.value) }} />
                        {mottong}
                    </div>
                    <div className="register_row3_2_label2">
                        <label>Email id</label>
                        <input type={"text"} onChange={(e) => { setregemail(e.target.value) }} />
                        {regemail}</div>
                    <div className=" register_row3_2_label2">
                        <label>Password</label>
                        <input type={"text"} onChange={(e) => { setregpw(e.target.value) }} />
                        {regpw}</div>
                    <div className="register_row3_2_button">
                         <button onClick={e => handleclick1(e)}CONTINUE></button></div>
                </div>
            </div>
            <div className="register_row4">
                <label>Copyright © 2022. All rights reserved.</label>
            </div>

        </>
    }
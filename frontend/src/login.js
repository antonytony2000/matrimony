import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const Navigate = useNavigate();
    const [loginid, setloginid] = useState("")
    const [logpw, setlogpw] = useState("")

    const handleclick = () => {
        if (loginid == "" || logpw == "") {
            alert("All fields are mandatory!")
        }
        let url = "http://localhost:8000/login"
        let request = { txtEmail: loginid, txtPassword: logpw }
        let header = {};
        axios.post(url, request, header).then((res) => {
            console.log(res.data)
            if (res.data != "") {
                Navigate("/Home")
            }
            else {
                alert("login id or password is incorrect")
            }
        }).catch()
    }
    return <>
        <div className="login_row">
            <div className="login_row_1">
                <label><b>Login</b></label>
                <button>X</button>

            </div>
            <div className="login_row_2">
                <label>Matrimony Id/Mobile No./E-mail</label>
                <input type={"text"} onChange={(e) => { setloginid(e.target.value) }} />
                {loginid}
            </div>
            <div className="login_row_3">
                <label>Password</label>
                <input type={"password"} onChange={(e) => { setlogpw(e.target.value) }} />
                {logpw}
            </div>
            <div className="login_row_4">
                <input type="checkbox" />
                <label>Keep me logged in</label>
            </div>
            <div className="login_row_5">
                <button onClick={e => handleclick(e)}>LOGIN</button>
            </div>
            <div className="login_row_6">
                <label>Forgot Password? | Login Via OTP</label>
            </div>
        </div>
    </>
}
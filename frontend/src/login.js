import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login() {
    const Navigate = useNavigate();
    const handleclick = () => { Navigate("/Inside")}
    const [loginid, setloginid] = useState("")
    const [logpw, setlogpw] = useState("")
    // let url="http://localhost:8000/Register"
    // let request={Profile:loginid,Mob:logpw}
    // let header={};
    // axios.post(url,request,header).then((res)=>{
    //   console.log(res.data)
    //   Navigate("/Inside")
    // }).catch()

    return <>
        <div className="login_row">
            <div className="login_row_1">
                <label><b>Login</b></label>
                <button>X</button>

            </div>
            <div className="login_row_2">
                <label>Matrimony Id/Mobile No./E-mail</label>
                <input type={"text"}  onChange={(e) => {setloginid(e.target.value) }} />
                {loginid}
            </div>
            <div className="login_row_3">
                <label>Password</label>
                <input type={"password"} onChange={(e)=>{setlogpw(e.target.value)}}/>
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
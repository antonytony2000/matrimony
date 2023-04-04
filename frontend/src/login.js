import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const Navigate = useNavigate();
    const handleclick = () => { Navigate("Inside")}
    // Navigate("Inside")
    return <>
        <div className="login_row">
            <div className="login_row_1">
                <label><b>Login</b></label>
                <button>X</button>

            </div>
            <div className="login_row_2">
                <label>Matrimony Id/Mobile No./E-mail</label>
                <input type={"text"} />
            </div>
            <div className="login_row_3">
                <label>Password</label>
                <input type={"password"} />
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
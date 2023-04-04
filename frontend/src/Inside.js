import "./Inside.css";
import logo from "./images/logo.svg";
import profile from "./images/profile.webp";
import icon from "./images/icon.png";
import bg2 from "./images/bg2.jpg";
export default function Inside() {
    return <>
        <div className="inside_row1" style={{ backgroundImage: `url(${bg2})` }}>
            <div className="inside_row1_1">
                <div className="inside_row1_logo">
                    <img src={logo} />
                </div>
                <label>MY HOME</label>
                <label>SEARCH</label>
                <label>MATCHES</label>
                <label>MAILBOX</label>
                <label>UPGRADE NOW</label>
                <img src={icon} />
            </div>
            <div className="inside_row1_2">
                <input type={"text"} />
                <button>SEARCH</button>
            </div>
        </div>
        <div className="inside_row2">
            <div className="inside_row2_1">
                <img src={profile} />
                <div className="inside_row2_1_t">
                    <h2>WTTR**</h2>
                    <div className="inside_row2_1_t_1">
                        <label className="misc">26 years , 5'5"</label>
                        <label>BHMS</label>
                    </div>
                    <div className="inside_row2_1_t_2">
                        <label className="misc">Mumbai</label>
                        <label>Doctor</label>
                    </div>
                    <div className="inside_row2_1_t_3">
                        <label className="misc">Hindu, Brahmin Bhumihar</label>
                        <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="inside_row2_1_t_4">
                        <label className="misc">Hindi-UP/UK</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
            <div className="inside_row2_2">
                <img src={profile} />
                <div className="inside_row2_2_t">
                    <h2>WTTR**</h2>
                    <div className="inside_row2_2_t_1">
                        <label className="misc">26 years , 5'5"</label>
                        <label>BHMS</label>
                    </div>
                    <div className="inside_row2_2_t_2">
                        <label className="misc">Mumbai</label>
                        <label>Doctor</label>
                    </div>
                    <div className="inside_row2_2_t_3">
                        <label className="misc">Hindu, Brahmin Bhumihar</label>
                        <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="inside_row2_2_t_4">
                        <label className="misc">Hindi-UP/UK</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
            <div className="inside_row2_3">
                <img src={profile} />
                <div className="inside_row2_3_t">
                    <h2>WTTR**</h2>
                    <div className="inside_row2_3_t_1">
                        <label className="misc">26 years , 5'5"</label>
                        <label>BHMS</label>
                    </div>
                    <div className="inside_row2_3_t_2">
                        <label className="misc">Mumbai</label>
                        <label>Doctor</label>
                    </div>
                    <div className="inside_row2_3_t_3">
                        <label className="misc">Hindu, Brahmin Bhumihar</label>
                        <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="inside_row2_3_t_4">
                        <label className="misc">Hindi-UP/UK</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
            <div className="inside_row2_4">
                <img src={profile} />
                <div className="inside_row2_4_t">
                    <h2>WTTR**</h2>
                    <div className="inside_row2_4_t_1">
                        <label className="misc">26 years , 5'5"</label>
                        <label>BHMS</label>
                    </div>
                    <div className="inside_row2_4_t_2">
                        <label className="misc">Mumbai</label>
                        <label>Doctor</label>
                    </div>
                    <div className="inside_row2_4_t_3">
                        <label className="misc">Hindu, Brahmin Bhumihar</label>
                        <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="inside_row2_4_t_4">
                        <label className="misc">Hindi-UP/UK</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
            <div className="inside_row2_5">
                <img src={profile} />
                <div className="inside_row2_5_t">
                    <h2>WTTR**</h2>
                    <div className="inside_row2_5_t_1">
                        <label className="misc">26 years , 5'5"</label>
                        <label>BHMS</label>
                    </div>
                    <div className="inside_row2_5_t_2">
                        <label className="misc">Mumbai</label>
                        <label>Doctor</label>
                    </div>
                    <div className="inside_row2_5_t_3">
                        <label className="misc">Hindu, Brahmin Bhumihar</label>
                        <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="inside_row2_5_t_4">
                        <label className="misc">Hindi-UP/UK</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
        </div>
    </>
}
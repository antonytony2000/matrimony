import "./Home.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.svg";
import profile from "./images/profile.webp";
import icon from "./images/icon.png";
import bg2 from "./images/bg2.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
    const Navigate = useNavigate();
    const [search, setsearch] = useState("")
    const [array,setarray]=useState([])
    useEffect(() => {
        let url = "http://localhost:8000/profile_selectall"
        let request = {}
        let header = {};
        axios.post(url, request, header).then((res) => {
            console.log(res.data)
            setarray(res.data)
        }).catch()
    }, [])

    const handleclick = () => {
        if (search == "") {
            alert("Enter content to search")
        }
        let url="http://localhost:8000/search"
        let request={search:search}
        let header={};
        axios.post(url,request,header).then((res)=>{
            console.log(res.data)
            if (res.data != "") {
               alert(JSON.stringify(res.data))
            }
            else {
                alert("Entered data is not in the database")
            }
        }).catch()
       
        }
    const handleclick1 = (e,pid) => {
        console.log(pid)
            Navigate("/Profile")
            localStorage.setItem("pid",pid)
        }
    return <>
        <div className="Home_row1" style={{ backgroundImage: `url(${bg2})` }}>
            <div className="Home_row1_1">
                <div className="Home_row1_logo">
                    <img src={logo} />
                </div>
                <label>MY HOME</label>
                <label>SEARCH</label>
                <label>MATCHES</label>
                <label>MAILBOX</label>
                <label>UPGRADE NOW</label>
                <img src={icon} />
            </div>
            <div className="Home_row1_2">
                <input type={"text"} onChange={(e) => { setsearch(e.target.value) }} />
                <button onClick={e => handleclick(e)}>SEARCH</button>
            </div>
        </div>
        <div className="Home_row2">
            
                {
                    array.map((itm,indx)=>{
                        return(<>
                           <div className="Home_row2_1"onClick={e => handleclick1(e,itm.id)}>
                <img src={profile} />
                <div className="Home_row2_1_t">
                    <h2>{itm.txtUsername}</h2>
                    <div className="Home_row2_1_t_1">
                        <label className="misc">{itm.dtdob}</label>
                        <label>BHMS</label>
                    </div>
                    <div className="Home_row2_1_t_2">
                        <label className="misc">Mumbai</label>
                        <label>Doctor</label>
                    </div>
                    <div className="Home_row2_1_t_3">
                        <label className="misc">Hindu, Brahmin Bhumihar</label>
                        <label>₹ 0 - 1 Lakh</label>
                    </div>
                    <div className="Home_row2_1_t_4">
                        <label className="misc">Hindi-UP/UK</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
                        <br/>
                        </>
                        )
                    })
                }
            
        </div>
    </>
}
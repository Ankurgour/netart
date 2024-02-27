import React from "react";
import logo from "../assets/logo.png";
import One from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import "./Home.css";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
const Home = () => {
  return (
    <div className="main-home">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="second-div">
        <div className="second-first">
          <img src={One} alt="" />
        </div>
        <div className="second-right">
          <h3>
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img src={two} alt="" style={{ height: "500px", width: "800px" }} />
          <p>
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="third-div">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={three} alt="" />
        <p style={{ textAlign: "center" }}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        {/* <hr  style={{height:"10px", color:"red"}}/> */}
        {/* <hr style="height: 10px; color: red; border: none; background-color: orange; font-weight: bold;"/> */}
        <hr
          style={{
            height: "3px",
            color: "red",
            border: "none",
            backgroundColor: "orange",
            fontWeight: "bold",
          }}
        />
      </div>
      <div className="fourth-div">
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>

        <p style={{ fontSize: "small", padding: "20px 50px 10px 50px" }}>
          CHEMICALS & PROCESS| POWER| WATER & WASTE WATER| OILS & GAS PHARMA|
          SUGARS & DISTILLERIES| PAPER & PULP| MARINE & DEFENCE| METAL & MINING|
          FOOD & BEVERAGE| PETROCHEMICAL & REFINERIES| SOLAR| BUILDING| HVAC|
          FIRE FIGHTING| AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="foooter">
        <p style={{display: 'flex',justifyContent:"center", alignItems:"center"}}><IoCallOutline style={{backgroundColor:"white", borderRadius:"20px", height:"20px", width:"20px"}}/><span style={{color:"white"}}>Toll Free 1800 200 1234</span></p>
        <p></p>
        <p style={{display: 'flex',justifyContent:"center", alignItems:"center"}}><FaFacebook  style={{backgroundColor:"",color:"white", borderRadius:"20px", height:"20px", width:"20px"}}/><span style={{color:"white"}}>www.facebook.com/cripumps</span></p>
        <p style={{display: 'flex',justifyContent:"center", alignItems:"center"}}><CiGlobe   style={{backgroundColor:"",color:"white", borderRadius:"20px", height:"20px", width:"20px"}}/><span style={{color:"white"}}>www.crigroups.com</span></p>

      </div>
    </div>
  );
};

export default Home;

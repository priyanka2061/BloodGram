import "./Signup.css";
import { HiUser } from "react-icons/hi";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Navbar from './Navbar'
export default function Signup() {
    return (
        <div className="signup">
            <Navbar />
            <h1>
                For Login Credentials
                <hr />
            </h1>
            <form>
                <label>
                    Full Name <span>*</span>:
                    <div className="nameic">
                        <HiUser className="icons" />
                        <input type="text" placeholder="   fullName" />
                    </div>
                </label>
                <label>
                    Email <span>*</span>:
                    <div className="nameic">
                        <AiOutlineMail className="icons" />
                        <input type="email" placeholder="   valid email id" />
                    </div>
                </label>
            </form>
            <form>
                <label>
                    Mobile No <span>*</span> :
                    <div className="nameic">
                        <AiFillPhone className="icons" />
                        <input type="text" placeholder="   Mobile No." />
                    </div>
                </label>
                <label>
                    Create Password <span>*</span>:
                    <div className="nameic">
                        <RiLockPasswordFill className="icons" />
                        <input type="text" placeholder="   Password" />
                    </div>
                </label>
            </form>
            <h1>
                Donor information
                <hr />
            </h1>
            <form className="form1">
                <label>
                    Blood Group <span>*</span>
                    <select>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </label>
                <label>
                    Gender<span>*</span>
                    <select>
                        <option>male</option>
                        <option>female</option>
                        <option>others</option>
                    </select>
                </label>
            </form>
            <form>
                <label>
                    Your Age:
                    <input type="number" placeholder="Above 18" className="start"></input>
                </label>
                <label>
                    Weight:

                    <input type="number" placeholder="/kg" className="start" />
                </label>
            </form>
            <form>
                <label>
                    Last Date Donation(optional)
                    <input type="date" className="start" />
                </label>
            </form>
            <h1>
                Contact information:
                <hr />
            </h1>
            <form >
                <label>
                    SMS ALERT ON YOUR PHONE <span>*</span>
                    <select>
                        <option>YES</option>
                        <option>NO</option>
                    </select>
                </label>
                <label>
                    Zip Code:<span>*</span>
                    <input
                        type="number"
                        placeholder="Postal code"
                        className="start"
                    ></input>
                </label>
            </form>
            <form>
                <label>
                    State:<span>*</span>
                    <select>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CH">Chandigarh</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="LA">Ladakh</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PY">Puducherry</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
                    </select>
                </label>
                <label>
                    District<span>*</span>
                    <input
                        type="text"
                        placeholder="Enter Your City"
                        className="start"
                    ></input>
                </label>
            </form>
            <div className="privacy">
                <input type="checkbox" />
                <h3>I accept all information is correct.</h3>
            </div>
            <button className="sign">SIGNUP</button>
        </div>
    );
}

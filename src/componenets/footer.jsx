import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter} from "react-icons/fa";

function Footer(){
    return <React.Fragment>
            <footer className="footer">
                <hr class="line" style={{height: '3px'}}/>
                <p id="cine">cineBooking</p>
                <div className="icons">
                    <a href="https://www.facebook.com/"><FaFacebookF id="fbk" style={{color: 'black', fontSize: '40px'}}/></a>
                    <a href="https://www.instagram.com/"><FaInstagram id="insta" style={{color: 'black', fontSize: '40px'}}/></a>
                    <a href="https://in.pinterest.com/"><FaPinterestP id="pint" style={{color: 'black', fontSize: '40px'}}/></a>
                    <a href="https://twitter.com/"><FaTwitter id="twit" style={{color: 'black', fontSize: '40px'}}/></a>
                </div>
                <p id="rights">Copyright 2021 &copy; Movies and Entertainment Pvt Ltd.</p>
            </footer>
    </React.Fragment>
}
export default Footer;
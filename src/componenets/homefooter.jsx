import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter} from "react-icons/fa";

function Homefooter(){
    return <React.Fragment>
            <footer className="hfooter">
                <hr class="hline" style={{height: '3px'}}/>
                <p id="hcine">cineBooking</p>
                <div className="hicons">
                    <a href="https://www.facebook.com/"><FaFacebookF id="hfbk" style={{color: 'black', fontSize: '40px'}}/></a>
                    <a href="https://www.instagram.com/"><FaInstagram id="hinsta" style={{color: 'black', fontSize: '40px'}}/></a>
                    <a href="https://in.pinterest.com/"><FaPinterestP id="hpint" style={{color: 'black', fontSize: '40px'}}/></a>
                    <a href="https://twitter.com/"><FaTwitter id="htwit" style={{color: 'black', fontSize: '40px'}}/></a>
                </div>
                <p id="hrights">Copyright 2021 &copy; Movies and Entertainment Pvt Ltd.</p>
            </footer>
    </React.Fragment>
}
export default  Homefooter;
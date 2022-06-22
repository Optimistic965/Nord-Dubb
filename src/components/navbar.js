import React, {useState} from "react";
import '../style/navbar.scss'
import Logo from "./assets/logo.svg"
import Burger from "./assets/buger.svg"

const Navbar = () => {

   const[dropMenu, setDropMenu] = useState(true);
   function showDropMenu(){
      const burgerMenu = document.querySelector('.burger_nav');

      if(dropMenu == true){
         burgerMenu.style.visibility = 'visible';
         setDropMenu(false);
      } else {
         setDropMenu(true);
         burgerMenu.style.visibility = 'hidden';
      }
   }

   return (
      <div className="navbar">
         <div className="logo1">
            <img className="logo" src={Logo} alt="NordVPN_logo" />
         </div>
         <div className="links">
            <div className="nav_links">
               <ul>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Servers</a></li>
                  <li><a href="#">What Is a VPN?</a></li>
                  <li><a href="#">Download VPN</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Business VPN</a></li>
               </ul>
            </div>
            <div className="action_links">
               <ul>
                  <li className="action_btn"><a href="#">Get NordVPN</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Log in</a></li>
               </ul>
               <img onClick={showDropMenu} className="burger" src={Burger} alt="burger" />
               <ul className="burger_nav">
                <li>
                   <span>NordVPN</span>
                   Online security and privacy
                </li>
                <li>
                   <span>NordPass</span>
                   Password Management
                </li>
                <li>
                   <span>NordPass Business</span>
                   Business password solution
                </li>
                <li>
                   <span>NordLocker</span>
                   Encryption with cloud storage
                </li>
             </ul>
            </div>
         </div>

      </div>
    );
}

export default Navbar;
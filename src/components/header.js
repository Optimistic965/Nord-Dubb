// import {useState} from 'react';
import '../style/header.scss';
import Navbar from './navbar';
import BBC from './assets/companies/bbc-white.svg';
import Buzz from './assets/companies/buzzfeed-white.svg';
import Forbes from './assets/companies/forbes-white.svg';
import Huffpost from './assets/companies/huffpost-white.svg';
import Tedx from './assets/companies/tedx-white.svg';
import Wired from './assets/companies/wired-white.svg';
import Mobile from './assets/hero-features-ultimate-security-package.webp';
import Success from './assets/success.svg';

const Header = () => {


   function countDown() {
      const dayD = document.getElementById('days');
      const hourD = document.getElementById('hours');
      const minuteD = document.getElementById('minutes');
      const secondD = document.getElementById('seconds');
      // 1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      let futDate = new Date(2022, 9, 20);
      let curDate = new Date();

      let dateDiffInMill = futDate.valueOf() - curDate.valueOf();  // output is in milliseconds

      let calDay = Math.floor(dateDiffInMill / day);
      let calHour = Math.floor((dateDiffInMill % day) / hour)
      let calMinute = Math.floor((dateDiffInMill % hour) / minute)
      let calSecond = Math.floor((dateDiffInMill % minute) / second)

     // Day : hr : mins : sec
     //  02: 01-23 : 01-59 : 01-59
   //   console.log(`${calDay} days : ${calHour} hour : ${calMinute} Minutes : ${calSecond} Seconds`);

      dayD.innerText = calDay;
      hourD.innerText = calHour;
      minuteD.innerText = calMinute;
      secondD.innerText = calSecond;
   }

   setInterval(countDown, 1000);

   // countDown();

   return (
      <section className="header">
         <Navbar  />
         <>
         <div className="hero_section">
            <div className="hero_text">
               <h2>68% off the 2-year plan</h2>
               <h2 className='extra_bold'>Get NordVPN's ultimate security package</h2>
               <ul>
                  <li>Enjoy the leading VPN service and malware blocker</li>
                  <li>Generate and store strong password</li>
                  <li>protect files in an encrypted cloud</li>
               </ul>
               <button>Choose Your Plan</button>
               <span className='counter'>
                  <span id='days'>00</span>:
                  <span id='hours'> 00</span>:
                  <span id='minutes'> 00</span>:
                  <span id='seconds'> 00</span>
               </span>
               <>
               <p><span> <img src={Success} alt="" /></span> 30-day money-back guarantee </p>
               </>
            </div>
            <div className="hero_img">
               <img src={Mobile} alt="mobile hero"/>
            </div>
         </div>
         <div className="partner_company">
            <ul>
               <li><img src={Wired} alt="wired" /></li>
               <li><img src={Huffpost} alt="Huffpost" /></li>
               <li><img src={Buzz} alt="Buzz" /></li>
               <li><img src={Forbes} alt="Forbes" /></li>
               <li><img src={Tedx} alt="Tedx" /></li>
               <li><img src={BBC} alt="Bbc" /></li>
            </ul>
         </div>
         </>
      </section>
    );
}

export default Header;
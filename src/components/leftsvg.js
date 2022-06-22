import '../style/hero.scss';
import Android from './assets/apps/android.svg'
import Apple from './assets/apps/apple.svg'
import Chrome from './assets/apps/chrome.svg'
import Edge from './assets/apps/edge.svg'
import Firefox from './assets/apps/firefox.svg'
import Linux from './assets/apps/linux.svg'
import MacOs from './assets/apps/macOs.svg'
import Windows from './assets/apps/windows.svg'
import Other from './assets/apps/other.svg'

const Leftsvg = ({children, header, para, btnText, app = false}) => {
   return (
      <div className="info_section">
         <div className="section_img">
           {children}
         </div>
         <div className="section_detail">
            <h3>{header}</h3>
            <br />
            <p>{para}</p>
            <br />
            {app && (<p className='apps'>Availabel on:
               <span><a href="https://nordvpn.com/download/android/"><img src={Android} alt="andriod apps" /></a></span>
               <span><a href="https://nordvpn.com/download/windows/"><img src={Windows} alt="windows apps" /></a></span>
               <span><a href="https://nordvpn.com/download/ios/"><img src={Apple} alt="apple apps" /></a></span>
               <span><a href="https://nordvpn.com/download/mac/"><img src={MacOs} alt="macOs apps" /></a></span>
               <span><a href="https://nordvpn.com/download/firefox-extension/"><img src={Firefox} alt="firefox apps" /></a></span>
               <span><a href="https://nordvpn.com/download/chrome-extension/"><img src={Chrome} alt="chrome apps" /></a></span>
               <span><a href="https://nordvpn.com/download/edge-extension/"><img src={Edge} alt="edge apps" /></a></span>
               <span><a href="https://nordvpn.com/download/linux/"><img src={Linux} alt="linux apps" /></a></span>
               <span><a href="https://nordvpn.com/download/other/"><img src={Other} alt="other apps" /></a></span>
               </p>)}
               <br />
            <button>{btnText}</button>
         </div>
      </div>
    );
}

export default Leftsvg;
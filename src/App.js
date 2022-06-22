import './style/App.scss';
import Header from './components/header';
import Rightsvg from './components/rightsvg';
import Leftsvg from './components/leftsvg';
import Review from './components/review';
import Bubble from './components/assets/bubble-shield.svg';
import Secure from './components/assets/secure-home.svg';
import Cloud from './components/assets/Cloud-coffee.svg';
import Flag from './components/assets/flags-walk.svg';



// wanna use this component for assembling all other components..


function App() {

  const sectionContent = {
    first: {
      header: "Our newest features protects you from ads, trackers, and malware",
      content: "Take your cybersecurity to the next level with NordVPN’s Threat Protection feature. You don’t need to connect to a VPN server for it to work. Once you enable it in the settings, Threat Protection will always make your browsing safer, faster, and smoother without tracking your actions online. Don’t worry about downloading malware, dealing with trackers and intrusive ads, or visiting a malicious URL — Threat Protection will neutralize these cyber threats before they can do any real damage to your device or data.",
      btnText: "Learn More"
    },
    second: {
      header: "Get secure and private access to the internet",
      content: " A good VPN service provides you a secure, encrypted tunnel for online traffic to flow. Nobody can see through the tunnel, get their hands on your online data, or find your real IP address and location. NordVPN is the best VPN if you’re looking for peace of mind when on public Wi-Fi. Securely access personal information or work files, encrypt your internet connection, and keep your browsing history and online identity private. Enjoy online privacy and security with NordVPN. Need more? Explore the additional VPN benefits our apps offer.",
      btnText: "See all Features"
    },
    third: {
      header: "Protect all of your devices",
      content: "Do you use Windows at work, macOS at home, and Linux for your special projects? You’ll enjoy online privacy and security on every platform. There’s a NordVPN application for Windows, macOS, iOS, Android, Linux and even Android TV. Oh, and also encrypted proxy extensions for Chrome, Firefox, and Edge. Best of all, with one NordVPN account, you can secure up to 6 devices at the same time. It’s the top VPN provider for all your gadgets, trusted by 14 million users worldwide. Try our risk-free VPN with a 30-day money-back guarantee and surf the web in privacy!",
      btnText: "Choose your App"
    },
    fourth: {
      header: "Enjoy a fast and stable connection anywhere",
      content: "Buffering is the ultimate buzzkill, so streaming or downloading files with a slow internet connection is not an option. No worries — what makes NordVPN stand out from other VPNs is its unbeatable combination of bulletproof security, fast connection speed, and unlimited bandwidth. Choose from over 5500 NordVPN servers in 60 countries and enjoy the fastest VPN experience in the world — from the UK to Australia or Canada. Thousands of VPN servers will make sure your internet connection doesn’t suffer. So turn on the VPN, access websites, download files, stream videos, and enjoy a speedy connection.",
      btnText: "Check Locations"
    }
  };

  return (
      <main>
        <div className="ip">Your IP: SP: GTNL1 Your Status: <span>Unprotected</span></div>
        <Header />
        <Leftsvg header={sectionContent.first.header} para={sectionContent.first.content} btnText={sectionContent.first.btnText}>
          <img src={Bubble} alt="bubble shield" />
        </Leftsvg>
        <Rightsvg header={sectionContent.second.header} para={sectionContent.second.content} btnText={sectionContent.second.btnText}>
         <img src={Cloud} alt="cloud coffee" />
        </Rightsvg>
        <Leftsvg header={sectionContent.third.header} para={sectionContent.third.content} btnText={sectionContent.third.btnText} app={true}>
          <img src={Secure} alt="secure home" />
        </Leftsvg>
        <Rightsvg header={sectionContent.fourth.header} para={sectionContent.fourth.content} btnText={sectionContent.fourth.btnText}>
         <img src={Flag} alt="flags walk" />
        </Rightsvg>
        <Review />
      </main>
  );
}

export default App;

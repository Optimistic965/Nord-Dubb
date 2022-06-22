import '../style/review.scss';
import Pew from './assets/reviews/pew-die.webp';
import Philip from './assets/reviews/philip-de.webp';
import Casey from './assets/reviews/casey.jpg';
import Fabrice from './assets/reviews/fsoone.webp';
import Raghu from './assets/reviews/kantha.webp';
import Harsh from './assets/reviews/cmdhover.webp';
import Youtube from './youtube';
import Twitter from './twitter';
import {useState} from 'react';


const Review = () => {
      const ytbReview ={
         pew : {
            userName: "PewDiePie",
            num: 111,
            review: "Browse the internet safely, but most importantly, freely. A VPN is one of those things that are just good to have. I recommend NordVPN."
         },
         casey : {
            userName: "CaseyNeistat",
            num: 12,
            review: "NordVPN is a very good VPN, they're very highly regarded in the industry. I've been using it for 3 years, it's not problematic, I use it on my iPhone, my Android, my Mac laptop."
         },
         philip : {
            userName: "Philip DeFranco",
            num: 6,
            review: "I've been a NordVPN customer for years, and if you still haven't checked it out you're missing out on the peace of mind one gets when securing your personal data and internet activity."
         }
      };

      const twtReview = {
         fabrice : {
            name: "Fabrice Soonekindt",
            usrName: "fsoonekindt",
            msg: `I never could've securely searched nor browsed the internet as an internaut nowadays on any devices the way it was meant to be: Browsing freely/without data collection- and tracking from the start, without the help of my favourite virtual network @NordVPN Grateful for it!`,
            dte: "7:12 PM - 4 Jan 2022"
         },
         harsh : {
            name: "Harsh",
            usrName: "CmDHoVeR",
            msg: `@NordVPN clearly has the BEST customer service Worldwide. You get connected to a support assistant faster than electricity. The team members are so qualified that a solution to the problem is reached even before it gets to your brains`,
            dte: "4:07 PM - 24 Jan 2022"
         },
         raghu : {
            name: "Kanthala Raghu",
            usrName: "kanthalaraghu",
            msg: `I recently started using Nord VPN was so impressed that i even bought 2 years subscription for it. Loving the service, thanks @NordVPN for helping keep internet safe and protecting privacy`,
            dte: "11:47 PM - 6 Feb 2022"
         },
      }

      const[ytb, setYtb] = useState(true);
      const[twt,setTwt] = useState(false);
      const[tech ,setTech] = useState(false);
      const[feature,setFeature] = useState(false);
      const[award,setAward] = useState(false);

      function changeState(e){
         let txt = e.target.innerText;

         console.log(e)

         setAward(false);
         setTech(false);
         setFeature(false);
         setTwt(false);
         setYtb(false);

         switch (txt) {
            case 'YouTube':
               setYtb(true);
               break;
            case 'Tweets':
               setTwt(true);
               break;
            case 'Tech review':
               setTech(true);
               break;
            case 'Featured':
               setFeature(true);
               break;
            case 'Awards':
               setAward(true);
               break;
            default:
               alert(new Error('Better click on something'));
               break;
         }
      }

   return (
      <div className="review">
         <div className="review_top">
            <div className="review_headers">
               <h2>But don't just take our word for it</h2>
               <h6>Find out what other people have to say about NordVPN </h6>
            </div>
            <div className="review_tabs">
               <ul  onClick={changeState}>
                  <li className={ytb && "active"}>YouTube</li>
                  <li className={twt && "active"}>Tweets</li>
                  <li className={tech && "active"}>Tech review</li>
                  <li className={feature && "active"}>Featured</li>
                  <li className={award && "active"}>Awards</li>
               </ul>
            </div>
         </div>
         <div className="review_section">
           { ytb && <>
             <Youtube userName={ytbReview.pew.userName} num={ytbReview.pew.num} review={ytbReview.pew.review}>
               <img src={Pew} alt={ytbReview.pew.userName} />
             </Youtube>
            <Youtube userName={ytbReview.casey.userName} num={ytbReview.casey.num} review={ytbReview.casey.review}>
               <img src={Casey} alt={ytbReview.casey.userName} />
            </Youtube>
            <Youtube userName={ytbReview.philip.userName} num={ytbReview.philip.num} review={ytbReview.philip.review}>
             <img src={Philip} alt={ytbReview.philip.userName} />
            </Youtube>
            </>}
            {
               twt && <>
                  <Twitter usrName={twtReview.fabrice.usrName} name={twtReview.fabrice.name} dte={twtReview.fabrice.dte} msg={twtReview.fabrice.msg}>
                     <img src={Fabrice} alt="user_avatar" />
                  </Twitter>
                  <Twitter usrName={twtReview.harsh.usrName} name={twtReview.harsh.name} dte={twtReview.harsh.dte} msg={twtReview.harsh.msg}>
                     <img src={Harsh} alt="user_avatar" />
                  </Twitter>
                  <Twitter usrName={twtReview.raghu.usrName} name={twtReview.raghu.name} dte={twtReview.raghu.dte} msg={twtReview.raghu.msg}>
                     <img src={Raghu} alt="user_avatar" />
                  </Twitter>
               </>
            }
         </div>
      </div>
    );
}

export default Review;
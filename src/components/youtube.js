import YtubeM from './assets/youtube.svg'

const Youtube = ({children, userName, num, review, }) => {
   return (
      <div className="user_review">
         <div className="user_detail">
            {children}
            <div className="detail">
               <div>
                  <h3>{userName}</h3>
                  <h5>{num}M subscribers</h5>
               </div>
            </div>
         </div>
         <hr />
         <div className="review_content"><q>{review}</q></div>
         <p>Watch on Youtube <img src={YtubeM} alt="Youtube icon" /></p>
      </div>
    );
}

export default Youtube;
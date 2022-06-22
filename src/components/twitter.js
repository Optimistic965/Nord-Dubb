import TwitterIcon from './assets/twitter.svg'

const Twitter = ({children, name, usrName, msg, dte}) => {
   return (
      <div className="user_review">
         <div className="user_detail">
            {children}
            <div className="detail">
               <div>
               <h4>{name}</h4>
               <h6>@{usrName}</h6>
               </div>
               <img className='twitter_icon' src={TwitterIcon} alt="twitter_icon" />
            </div>
         </div>
         <div className="twt_msg">{msg}</div>
         <div className="twt_date">{dte}</div>
      </div>
    );
}

export default Twitter;
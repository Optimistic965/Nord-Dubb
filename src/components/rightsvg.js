import '../style/hero.scss';

const Rightsvg = ({children, header, para, btnText}) => {
   return (
      <div className="info_section">
         <div className="section_detail">
            <h3>{header}</h3>
            <br />
            <p>{para}</p>
            <br />
            <button>{btnText}</button>
         </div>
         <div className="section_img">
            {children}
         </div>
      </div>
    );
}

export default Rightsvg;
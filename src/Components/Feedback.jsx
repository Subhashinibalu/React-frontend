import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = ({customerfeedback}) => {
    const caroRef = useRef(null);
  let settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:<i className="bi bi-arrow-left-circle "></i>,
    prevArrow: <i className="bi bi-arrow-left-circle "></i>
  };
    return (
        <>
      
         <div className="w-full p-10" id="feedback">

<h1 className="p-4 fontfam" style={{fontSize: "3rem", color:"#2C2C51"}}>{customerfeedback.feedbackh1}<span style={{marginLeft: "50%",fontWeight: "normal"}}>
  <button id="left-arrow"  className="border-0 bg-white  " onClick={()=>caroRef?.current?.slickPrev()}> <i className="bi bi-arrow-left-circle "></i></button>
  <button id="right-arrow" className="border-0 bg-white " onClick={() => caroRef?.current?.slickNext()}><i className="bi bi-arrow-right-circle"></i></button> 
 </span>
 
</h1>



<Slider {...settings} ref={caroRef} className="m-10 space-x-3">
  {customerfeedback.detail.map((item,index)=>{
  return(
    <div key={index} className="me-10  shadow-sm border-0 p-4"  >
    <div className=" p-5 ">
      
        <div className="flex justify-between">
          <div className="flex">
            <img  src={item.img} style={{width: "60px", borderRadius: "50%"}}/>
            <p className="ms-3  fontfam" style={{color: "#2C2C51"}}><span className="fw-semibold">{item.by}</span><br/><span className="fw-light" style={{fontSize: "14px"}}>{item.who}</span></p>
          </div>
        
          <div >
            <i className="bi bi-star" style={{color: "#ff9900", fontSize: "12px"}}></i>
            <i className="bi bi-star" style={{color: "#ff9900", fontSize: "12px"}}></i>
            <i className="bi bi-star" style={{color: "#ff9900", fontSize: "12px"}}></i>
            <i className="bi bi-star" style={{color: "#ff9900", fontSize: "12px"}}></i>
            <i className="bi bi-star" style={{color: "#ff9900", fontSize: "12px"}}></i>

          </div>
         
        </div>
        
       
    
      <p className="card- fontfam m-3 py-3 fw-lighter text-secondary" >{item.feedback}</p>
    
    </div>
  </div>
  )
  })}

       
    </Slider>
   
</div>


   
        </>
    );
};

export default Feedback;
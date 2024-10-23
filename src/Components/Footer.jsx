import { useEffect, useState } from "react";

import { apicalls } from "../Pages/API/Api";

const Footer = () => {

  const [footerdata, setFooterData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const api = new apicalls();
          try {
              const data = await api.fetchFooterData();
              // Assuming the API returns an array and we want the first object
              setFooterData(data[0]);
          } catch (err) {
              console.log(err);
          }
      };

      fetchData();
  }, [footerdata]);

  // Ensure navbardata is available before rendering components
  if (!footerdata) {
      return <div>Loading...</div>;
  }

    return (
        <>
          <div className="w-full p-8 " style={{backgroundColor: "#07112D"}}>
    <div className="flex  justify-center m-5">
 
 <div className="w-1/4 ms-5">
  <img src={footerdata.footerlogo} className="w-50 mb-2"/>
  <p className="text-white fontfam">{footerdata.footerp1}</p>
  <p className="text-white fontfam">{footerdata.footerp2} <span style={{color: "#FF8C00"}}>{footerdata.footerspan}</span></p>

</div>

 <div className="w-2/4 ms-5 text-white flex flex-wrap">
 
  <div id="products" className=" me-6">
    <p  className="ms-4 fontfam " style={{fontSize: "20px"}}>{footerdata.products.name}</p>
    <ul className="arrow fontfam">
    {footerdata.products.items.map((ele,index)=>{
        return(
<li key={index}><a href={`/${ele}`} className="ms-2 ">{ele}</a></li>
        )
   })}

    </ul>
  </div>
  
  <div id="company " className=" me-6">
    <p  className="ms-4 fontfam " style={{fontSize: "20px"}}>{footerdata.company.name}</p>
    <ul className="arrow fontfam">
        {footerdata.company.items.map((ele,index)=>{
            return(
             
                <li key={index}><a href={`/${ele.link}`} className="ms-2">{ele.name}</a></li>
            )
        })}
   
     
    </ul>
  </div>
 
  <div id="support " className=" me-5">
    <p  className="ms-4 fontfam " style={{fontSize: "20px"}}>{footerdata.support.name}</p>
    <ul className="arrow fontfam">
        {footerdata.support.items.map((ele,index)=>{
            return(
                <li key={index}><a href={`/${ele}`} className="ms-2">{ele}</a></li>
            )
        })}
          
    </ul>
  </div>
    
    <div id="partner" className=" mt-5 me-24">
      <p  className="ms-4 fontfam " style={{fontSize: "20px"}}>{footerdata.partner.name}</p>
      <ul className="arrow fontfam">
        {footerdata.partner.items.map((ele,index)=>{
            return(
                <li key={index}><a href={`/${ele}`} className="ms-2">{ele}</a></li>
            )
        })}
       
      </ul>
    </div>
  
    <div id="account " className="me-5 mt-5">
      <p className="ms-4 fontfam " style={{fontSize: "20px"}}>ACCOUNT</p>
      <ul className="arrow fontfam">
      {footerdata.account.items.map((ele,index)=>{
            return(
                <li key={index}><a href={`/${ele.link}`} className="ms-2">{ele.name}</a></li>
            )
        })}
      </ul>
    </div>
    
    <div id="support " className=" me-5 mt-5">
      <p className="fontfam" style={{fontSize: "20px"}}>FIND US ON</p>
      <div className=" flex logo">
        <a href="#"><p className="  me-2 fw-bolder text-secondary px-5" style={{fontSize: "2rem", borderRadius: "50px", backgroundColor: "#DDDDDD"}}>f</p></a>
        <a href="#"><i className="bi bi-twitter text-secondary me-2 px-2 py-1 " style={{fontSize: "2rem", borderRadius: "50px", backgroundColor: "#DDDDDD"}}></i></a>
        <a href="#"><p className="  me-2 fw-bolder text-secondary px-3" style={{fontSize: "2rem", borderRadius: "50px", backgroundColor: "#DDDDDD"}}>in</p></a>   
      </div>
    </div>

 </div>

</div>
<div className="w-3/4 mx-auto p-5">
  <hr style={{color:"gray", fontWeight: "bolder"}}/>
  <p className="fontfam float-end text-white mt-2"> &copy; 2023 Bytize</p>
</div>

    </div>  
        </>
    );
};

export default Footer;
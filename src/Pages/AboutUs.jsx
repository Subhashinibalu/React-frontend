import { useEffect, useState } from "react";
import FirstLayout from "../Layout/FirstLayout";
import { apicalls } from "./API/Api";

const AboutUs = () => {

  
  const [aboutus, setAboutUs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = new apicalls();
      try {
        const data = await api.fetchAboutData();
        
        setAboutUs(data);
      } catch (err) {
        console.log(err);
      } 
    };

    fetchData();
  }, [aboutus]);

 


  // Ensure home data is available before rendering components
  if (!aboutus) {
    return <div>Loading...</div>;
  }
  return (

<FirstLayout transparent={true}>
<div className="w-full bg-[#957FB4] flex justify-center items-center pb-36 px-36 pt-48 top-12">
    <div >
      <h1 className='text-5xl font-bold text-white fontfam'>{aboutus.abouttitle}</h1>
      <h3 className='font-semibold text-white text-center fontfam text-lg m-3'>{aboutus.aboutsub} &nbsp; &gt; &nbsp; {aboutus.abouttitle}</h3>

    </div>
  </div>
<div className="bg-gray-100 w-full ">
     
     <div className="w-full  p-28">
       <div className="flex flex-row space-x-8">
         {/* About Text */}
         <div className="w-1/2 p-5 ms-14">
           <h1 className="text-5xl font-normal mb-4">{aboutus.aboutheading}</h1>
           {aboutus.aboutlist.map((ele,i)=>{
             return <p className="mb-3 text-xl" key={i}>{ele}</p>
            })}
          
         </div>
         {/* Logos */}
         <div className="w-1/2 flex flex-col items-center justify-center">
           <div className="text-center ">
             <img src={aboutus.aboutimgdiv.aboutimg1} alt="PosBytz Logo" className="mx-auto" />
             <p className="text-gray-500 my-2">{aboutus.aboutimgdiv.aboutinfo}</p>
             <img src={aboutus.aboutimgdiv.aboutimg2} alt="Bytize Logo" className="mx-auto" />
           </div>
         </div>
       </div>
     </div>

     {/* Cards Section */}
     <div className="bg-white p-5">
       <h2 className="text-4xl font-bold text-center mb-4">{aboutus.aboutcarddiv.aboutquestion}</h2>
       <p className="text-center text-lg text-gray-500 mb-8">{aboutus.aboutcarddiv.aboutanswer}</p>
       <div className="container mx-auto flex justify-center">
         <div className="grid grid-cols-3 gap-4 w-full max-w-5xl ">
        {aboutus.aboutcarddiv.aboutcards.map((card,i)=>{
         return(
<div key={i} className="bg-white p-10 shadow-lg rounded-lg text-center ">
             <div className="mb-3 mt-5 flex justify-center">
               <span className="px-3 py-2 orng text-white rounded-full text-3xl">
                 <i className={card.acardicon}></i>
               </span>
             </div>
             <h5 className="text-2xl font-bold mb-4">{card.acardtitle}</h5>
             <p className="text-gray-500 mb-10">{card.acardcontent}</p>
             <a href="#" className=" font-extrabold text-3xl" style={{color:"gray"}}>
               <i className="bi bi-arrow-right"></i>
             </a>
           </div>
         )
        })}
           
          
           
         
         </div>
       </div>
     </div>
   </div>
</FirstLayout>


    
   
  );
};

export default AboutUs;

import { useEffect, useState } from "react";
import FirstLayout from "../Layout/FirstLayout";
import { apicalls } from "./API/Api";

const Support = () => {
 
  const [support, setSupport] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = new apicalls();
      try {
        const data = await api.fetchSupportData();
        setSupport(data);
      } catch (err) {
        console.log(err);
      } 
    };

    fetchData();
  }, [support]);

  // Ensure home data is available before rendering components
  if (!support) {
    return <div>Loading...</div>;
  }
    return (
        <>
<FirstLayout transparent={true}>
<div className="w-full bg-[#957FB4] flex justify-center items-center pb-36 px-36 pt-48 top-12">
    <div >
      <h1 className='text-5xl font-bold text-white fontfam'>{support.supporttitle}</h1>
      <h3 className='font-normal text-white text-center fontfam text-lg m-3'>{support.supportsub1} &nbsp; &gt; <a className="inline" href="/contact"> {support.supportsub2}</a> &nbsp; &gt; {support.supporttitle} </h3>

    </div>
  </div>
<div className="container mx-auto mt-20">
                <div className="mb-5">
                    <h2 className="text-center font-bold text-4xl  mb-2">{support.supporth}</h2>
                </div>
                
                <div className="flex justify-center">
                    <div className="flex flex-row justify-center w-9/12 p-3 mb-4 space-x-3">
                        <div className="card border-b-0 border-l-0 border-t-0 border-r-2 rounded-none px-5 m-5" style={{height: "fit-content"}}>
                            <div className="card-body my-4 ">
                                <div className="flex justify-center mb-3">
                                    <span className="px-3 py-1 border-2  rounded-full text-4xl" style={{borderColor:"#FF8C00",color:"#FF8C00"}}>
                                        <i className={support.supportdiv1.div1icon}></i>
                                    </span>
                                </div>
                                <h5 className="text-center font-bold my-4 text-2xl">{support.supportdiv1.div1title}s</h5>
                                <p className="text-center text-gray-500 mb-5 font-medium">{support.supportdiv1.div1text}</p>
                                <div className="text-center">
                                    <button className="orng text-white rounded-full font-medium rounded-5 px-5 py-3 border-0">{support.supportdiv1.div1btntxt}</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card border-0" style={{height: "fit-content"}}>
                            <div className="card-body my-4">
                                <div className="flex justify-center mb-3">
                                    <span className="px-3 py-1 border-2 rounded-full text-4xl" style={{borderColor:"#FF8C00",color:"#FF8C00"}}>
                                        <i className={support.supportdiv2.div2icon}></i>
                                    </span>
                                </div>
                                <h5 className="text-center font-bold my-4 text-2xl">{support.supportdiv2.div2title}</h5>
                                <p className="text-center text-gray-500 mb-5 font-medium">{support.supportdiv2.div2text}</p>
                                <div className="text-center">
                                    <button className="orng rounded-full text-white font-medium rounded-5 px-5 py-3 border-0">{support.supportdiv2.div2btntxt}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                      
                        <div className="p-5 bg-gray-50  ">
        <h2 className="text-4xl font-bold text-center mb-4">{support.supportquestion}</h2>
        <p className="text-center text-lg text-gray-500 mb-8">{support.supportanswer}</p>
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-3 gap-4 w-full max-w-5xl ">
         {support.supportcard.map((card,i)=>{
          return(
<div key={i} className="bg-white p-10 shadow-lg rounded-lg text-center ">
              <div className="mb-3 mt-5 flex justify-center">
                <span className="px-3 py-2 orng text-white rounded-full text-3xl">
                  <i className={card.scardicon}></i>
                </span>
              </div>
              <h5 className="text-2xl font-bold mb-4">{card.scardh5}</h5>
              <p className="text-gray-500 mb-10">{card.scardp}</p>
              <div className="text-center">
                                            <button className="orng text-white font-medium rounded-full px-4 py-2 border-0">{card.scardbtn}</button>
                                        </div>
            </div>
          )
         })}
            
           
            
          
          </div>
        </div>
      </div>

      {/* <div className=" mt-32">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Email Support</h2>
          <p className="text-center text-gray-600 mb-6 text-lg">
          Please submit your questions, comments, and other inquiries below along with your contact information. One of our team members will reach out to you promptly.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 mb-3">
              <input
                type="text"
                className="w-full p-3 border-0 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
                aria-label="First name"
              />
           
            </div>
            <div className="flex gap-4 mb-3">
              <input
                type="text"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Business name"
                aria-label="First name"
              />
           
            </div>
            <div className="flex gap-4 mb-3">
              <input
                type="text"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                aria-label="First name"
              />
           
            </div>
            <div className="flex gap-4 mb-3">
              <input
                type="text"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="SUbject"
                aria-label="First name"
              />
           
            </div>
         
            <div className="mb-3">
              <textarea
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Message"
                id="message"
                rows="8"
              ></textarea>
            </div>
            <div className="flex  mt-4">
              <button
                className="orng text-white py-3 px-6 rounded shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>           
                   */}

               

                <div className="p-4 ms-36 my-8">
                    <div className="flex justify-between items-center">
                        <div className="w-2/3">
                            <h2 className="font-bold text-3xl">{support.whatsapp.whatsapph}</h2>
                            <p className="text-gray-500 text-lg mt-2">{support.whatsapp.whatsappinfo}</p>
                        </div>
                        <div className="w-1/3 text-center mt-4">
                            <button className="orng rounded-full text-white font-medium rounded-5 py-2 px-4 border-0 flex items-center justify-center">
                                <i className="bi bi-whatsapp mr-2"></i>{support.whatsapp.whatsappbtn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
</FirstLayout>






            
        </>
    );
};

export default Support;

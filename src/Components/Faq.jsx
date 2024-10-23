import { useState } from "react";


const Faq = ({faq}) => {

    const [visibleIndex, setVisibleIndex] = useState(null);

    
    const toggle = (index) => {
      setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <>
         <div className="w-full p-5">
  <div>
    <h1 className="text-center  p-3 mb-3 font-bold fontfam text-4xl"  >{faq.faqh1}</h1>
    <div className="accordion mx-52">
      <div className="items ">
      {faq.questions.map((ele, index) => (
        <div key={index} >
          
          <p className="fontfam font-bold p-3" onClick={() => toggle(index)} style={{ color: visibleIndex === index ? '#FF8C00' : 'black' }}>
            <button className="border-0 bg-white" style={{ color: visibleIndex === index ? '#FF8C00' : 'black' }}>{visibleIndex === index ? '▲' : '►'} </button>
            {ele.q}
          </p>
          <p className="py-2 text-secondary fontfam" style={{ display: visibleIndex === index ? 'block' : 'none' }}>
            {ele.a}
          </p>

          <hr />
        </div>
      ))}
       
      </div>
     
      
     
     
            </div>
  </div>

</div>
   
        </>
    );
};

export default Faq;
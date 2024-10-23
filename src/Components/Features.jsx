import { useState } from "react";

const Features = ({features}) => {

    const [divdata, setDivData]=useState(features.featureslist[0]);
    const handleClick=(index)=>{
        setDivData(features.featureslist[index])

    }

    return (
        <>
          
       <div className="bg-gray-100 max-w-screen " >
<div className=" mx-auto px-4">
  <div className="p-5 m-2">
    <h2 className="text-2xl font-bold text-center text-gray-800">{features.featuresTitle}</h2>
  </div>
</div>

<div className="eael-tabs-nav m-7" role="tablist">
  <ul className="eael-tab-top-icon flex justify-evenly p-3" role="tablist">
    {features.featureslist.map((ele, index) => (
      <a id="pos" className="" key={index} onClick={() => handleClick(index)}>
        <li className="eael-tab-item-trigger grid justify-items-center">
          <img decoding="async" src={ele.logo} className="" />
          <figcaption className="text-center flex flex-col items-center">
            <span style={{color:ele.color}}>{ele.featurename}</span>
          </figcaption>
        </li>
      </a>
    ))}
  </ul>
</div>

<div id="content" className="container mx-auto px-4">
  <div className="flex justify-center mx-10">
    <div className="m-5">
      <div className="m-4">
        <h3 id="change-heading" className="text-xl font-semibold " style={{color:divdata.textcolor}}>{divdata.description}</h3>
      </div>
      <div>
        <ul id="features">
          {divdata.lists.map((ele, index) => (
            <li key={index} className="feature-list">{ele}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex justify-center items-center ms-3 me-7">
      <img src={divdata.featureimg} id="change-img" className=" h-auto" alt="" />
    </div>
  </div>
</div>
</div> 

            
        </>
    );
};

export default Features;


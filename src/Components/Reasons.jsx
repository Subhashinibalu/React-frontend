

const Reasons = ({reasons}) => {
    return (
      <>
    
      <h1 className="text-center font-bold text-5xl mb-4 mt-9">
        {reasons.reasonheading}
      </h1>

      <div className="flex justify-center mb-4">
        <h3 className="font-bold text-4xl w-5/12 text-center">
          {reasons.reasoninfo1}
        </h3>
      </div>

     
      <h1 className="text-center font-bold text-5xl text-amber-600 mb-8">
        {reasons.reasoninfo2}
      </h1>


      <div className="grid grid-cols-3 gap-6 my-16 mx-40">
        {reasons.reason.map((ele, index) =>{
          return (
            <div 
            key={index} 
            className="bg-white p-5 mx-8 my-5 shadow-lg flex flex-col items-center border-solid border-4"
            style={{ borderRadius: "80px 0px 80px 0px", borderColor: ele.reasoncolor }} // Correctly interpolate the color variable
          >
            <div className="mb-4">
              <img
                loading="lazy"
                decoding="async"
                src={ele.reasonimg}
                className=""
                alt="Point of Sale billing software"
              />
            </div>
            <h4 className="text-center text-2xl font-semibold m1-4" style={{color:ele.color}}>
              {ele.raesonh4}
            </h4>
            <p className="text-center text-xl font-semibold mb-3">
              {ele.reasonp1}
            </p>
            <p className="text-center text-base mb-3">
              {ele.reasonp2}
            </p>
          </div> 
          )
        } )}
      </div>

    </>

    );
};

export default Reasons;

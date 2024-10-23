

const ImageAnimation = ({animation}) => {
  return (
    <div className="bg-[#FBFBFD] p-5 w-full">
      {/* Main Heading */}
      <h2 className="text-center font-bold mb-2 text-2xl">
        {animation.animeh2}
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-600 text-lg mb-6">
        {animation.animep}
      </p>

      {/* Images Section */}
      <div className='ms-40'>
      <div className="ms-16 ">
        <div className="flex mb-5">
          {animation.animeimages1.map((ele, i) =>{
            return (
              <img
                key={i}
                src={ele.anime1img}
                className={ele.anime1class}
                style={{ transform: 'skew(-45deg, 15deg)' }}
                alt="Animation"
              />
            )
          })}
       
        </div>

        <div className="flex  mb-8">
        {animation.animeimages2.map((ele, i) =>{
            return (
              <img
                key={i}
                src={ele.anime2img}
                className={ele.anime2class}
                style={{ transform: 'skew(-45deg, 15deg)' }}
                alt="Animation"
              />
            )
          })}
      
        </div>

        <div className="flex">
        {animation.animeimages3.map((ele, i) =>{
            return (
              <img
                key={i}
                src={ele.anime3img}
                className={ele.anime3class}
                style={{ transform: 'skew(-45deg, 15deg)' }}
                alt="Animation"
              />
            )
          })}
         
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ImageAnimation;

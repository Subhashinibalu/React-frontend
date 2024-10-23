

const GetStarted = ({start}) => {
    return (
        <>
        <div className="w-full p-5" style={{backgroundColor: "#FF8C00"}}>
  <div className="">
    <h1 className="text-center text-white mb-3 font-bold fontfam text-4xl" >{start.starth1}</h1>
    <h1 className="text-center text-white mb-3 font-bold fontfam  text-4xl"   >{start.starth2}</h1>
    <h1 className="text-center text-white mb-3 font-bold fontfam  text-4xl">{start.starth3}</h1>
      <div className="elementor-button-wrapper text-center  " >
        <a className="elementor-button elementor-button-link elementor-size-md" href="#" style={{backgroundColor: "white"}}>
              <span className="elementor-button-content-wrapper"  >
              <span className="elementor-button-text " style={{color: "#ff9900"}}>{start.startbtn}</span>
      </span>
            </a>
      </div>

  </div>

  </div>    
        </>
    );
};

export default GetStarted;
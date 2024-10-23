
const Youtube = ({youtube}) => {
    return (
        <>
             <div className="max-w-screen bg ">
          <div className="m-5 p-5">
            <h2 className="text-center font-bold text-6xl" >{youtube.youtubeheading}</h2>
          <p className="text-center font-bold m-4" style={{fontSize: "18px"}}>{youtube.youtubep1}</p>
          <p className="text-center m-4" style={{fontSize: "18px"}}>{youtube.youtubep2}</p>
         <div className="flex justify-center mt-5">
          <iframe width="1170" height="658" className="mt-5" src={youtube.youtubevideosrc} title="Restaurant and Retail ERP Software - PosBytz"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  
        
         </div>
          </div>
          
          </div>

        </>
    );
};

export default Youtube;
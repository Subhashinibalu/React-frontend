

const About = ({about}) => {
      const a={about}
    
    return (
        <>
         
<div className="about mt-56 mx-36 max-w-screen">
     <div className="grid justify-items-center ">
  <h1 className="mx-36 font-bold text-6xl text-center">{a.about.aboutheading}</h1>
  <p className="mx-56 text-xl mt-4" >{a.about.aboutinfo1} <a href="https://posbytz.com/pos/" className="text-decoration-none text-black">{a.about.aboutspan}, </a>{a.about.aboutinfo2}</p>
  
  <div className="elementor-button-wrapper m-5">
                <a className="elementor-button elementor-button-link elementor-size-md" href="#register-iframe">
                      <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">{a.about.aboutbutton} </span>
              </span>
                    </a>
              </div>
   </div>

</div>
            
        </>
    );
};

export default About;
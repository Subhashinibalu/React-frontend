
const Signup = ({signup}) => {
    return (
        <>
           <div className="w-full" style={{backgroundColor: "#F0F0F2"}} >
<div className="flex p-5 justify-between ">
  <div className="mt-auto mb-auto p-5 m-5">
    <h1 className="text-center font-bold mb-4" style={{fontSize: "3rem"}}>{signup.signuph1}<span style={{color: "#FF8C00"}}> {signup.signupspan}</span></h1>
    <div className="elementor-button-wrapper  ">
      <a className="elementor-button elementor-button-link elementor-size-md" href="#">
            <span className="elementor-button-content-wrapper">
            <span className="elementor-button-text ">{signup.signupbtn}</span>
    </span>
          </a>
    </div>
  </div>
  <div>
    <img src={signup.signupimg} className="singupimg"/>
  </div>
</div>
</div> 
        </>
    );
};

export default Signup;
import { useEffect, useState } from "react";
import About from "../Components/About";
import CarouselSection from "../Components/CarouselSection";
import Faq from "../Components/Faq";
import Features from "../Components/Features";
import Feedback from "../Components/Feedback";
import GetStarted from "../Components/GetStarted";
import ImageAnimation from "../Components/ImageAnimation";
import RatingImg from "../Components/RatingImg";
import Reasons from "../Components/Reasons";
import Signup from "../Components/Signup";
import Youtube from "../Components/Youtube";
import FirstLayout from "../Layout/FirstLayout";
import Modal from "../Components/Modal"; // Import the modal component
import { apicalls } from "./API/Api";

const Home = () => {
  const [home, setHomeData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const fetchData = async () => {
      const api = new apicalls();
      try {
        const homeData = await api.fetchHomeData();
        setHomeData(homeData);
      } catch (err) {
        console.log(err);
      } 
    };

    fetchData();
  }, []);
  
  // Ensure home data is available before rendering components
  if (!home) {
    return <div>Loading...</div>;
  }

  return (
    <FirstLayout transparent={false}>
      <About about={home.about} />
      <RatingImg rating={home.ratingImg} />
      <Features features={home.features} />
      <Youtube youtube={home.youtube} />
      <Reasons reasons={home.reasons} />
      <ImageAnimation animation={home.animation} />
      <CarouselSection caro={home.caro} />
      <Feedback customerfeedback={home.customerfeedback} />
      <Signup signup={home.signup} />
      <Faq faq={home.faq} />
      <GetStarted start={home.start} />

      {/* Fixed Image */}
      <img 
        src="https://image.crisp.chat/avatar/website/b21f93c5-b94e-40ff-8b48-071a822e5da1/120/?1729314687908" 
        alt="Fixed Icon" 
        className="fixed bottom-5 right-5 w-16 rounded-full cursor-pointer z-50"
        onClick={() => setIsModalOpen(true)} 
      />

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </FirstLayout>
  );
};

export default Home;

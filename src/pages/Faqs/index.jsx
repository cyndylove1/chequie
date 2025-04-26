import { GoPlus } from "react-icons/go";
import faqImage from "../../assets/images/Group 1000001574.png";
import useFaqs from "./useFaqs";
import { useState } from "react";
import AjoSavings from "./SavingsContent";
import SavingsContent from "./SavingsContent";

const Faqs = ({ }) => {
  // const { handleAccordionClick, accordion } = useFaqs();
   const [activeButton, setActiveButton] = useState("Ajo Savings"); // Default selected tab

   const buttons = [
     "Ajo Savings",
     "Solo Savings",
     "App Safety & Fund Protection",
     "More questions you may have",
   ];
  
  return (
    <div className="mb-[25rem] mt-[7rem] relative flex flex-col items-center md:px-5 py-12">
      <div className="mt-[8rem] md:mt-0">
        <h2 className=" md:text-[48px] text-[25px] text-center px-4 text-[#008A48] mb-4">
          Why Chequemate?
        </h2>
        <p className="lg:text-[25px] md:text-[20px] text-[15px] fw-bold px-4  text-center pt-2 lg:w-[80%] w-full mx-auto">
          Welcome to Chequemate, Mate! Your best app for Ajo contributions and
          Solo savings with up to 18-22% interest per annum.
        </p>
        <div className="lg:text-[25px] md:text-[20px] text-[15px] fw-bold px-4  text-center pt-2 lg:w-[80%] w-full mx-auto">
          I am Chequie and I know you have questions. Here, I will try to answer
          as many as I can but if you have any questions that I may have missed
          out on here, feel free to <span className="font-bold">contact customer support.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {buttons.map((category) => (
            <button
              key={category}
              onClick={() => setActiveButton(category)}
              className={`text-[#6D6D6D] px-[24px] py-[16px] rounded-full text-[16px] ${
                activeButton === category
                  ? "bg-[#008A48] text-white"
                  : "bg-white text-[#6D6D6D] border-[1px] border-[#6D6D6D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <SavingsContent activeButton={activeButton} />
        </div>
      </div>

      <div className=" md:right-0 md:mr-6 absolute top-0 flex justify-center mt-6">
        <img src={faqImage} alt="Mascot" className="lg:w-40 w-32 h-auto p-1" />
      </div>
    </div>
  );
};

export default Faqs;

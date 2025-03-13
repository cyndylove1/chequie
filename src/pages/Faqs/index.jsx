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

        {/* <div className="w-full lg:px-[6rem] px-2 lg:pt-[5rem] pt-[2rem]">
          <div>
            {accordion.map((item, i) => (
              <div
                key={i}
                className="mb-4 text-black cursor-pointer"
                onClick={() => {
                  handleAccordionClick(i);
                  setActiveIndex(item.isOpen ? null : i);
                }}
              >
                <div className="py-4">
                  <div className="flex items-center justify-between py-4">
                    <div className="fw-medium md:text-[28px] text-[16px]">
                      {item.title}
                    </div>
                    <div>
                      {item.isOpen ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="20" fill="#008A48" />
                          <path
                            d="M24.9196 16.463L21.384 19.9985L24.9196 23.5341C25.1071 23.7216 25.2124 23.976 25.2124 24.2412C25.2124 24.5064 25.1071 24.7607 24.9196 24.9483C24.732 25.1358 24.4777 25.2412 24.2124 25.2412C23.9472 25.2412 23.6929 25.1358 23.5053 24.9483L19.9698 21.4127L16.4343 24.9483C16.2467 25.1358 15.9924 25.2412 15.7272 25.2412C15.462 25.2412 15.2076 25.1358 15.0201 24.9483C14.8325 24.7607 14.7272 24.5064 14.7272 24.2412C14.7272 23.976 14.8325 23.7216 15.0201 23.5341L18.5556 19.9985L15.0201 16.463C14.8325 16.2755 14.7272 16.0211 14.7272 15.7559C14.7272 15.4907 14.8325 15.2363 15.0201 15.0488C15.2076 14.8613 15.4619 14.7559 15.7272 14.7559C15.9924 14.7559 16.2467 14.8613 16.4343 15.0488L19.9698 18.5843L23.5053 15.0488C23.6929 14.8613 23.9472 14.7559 24.2124 14.7559C24.4777 14.7559 24.732 14.8613 24.9196 15.0488C25.1071 15.2363 25.2124 15.4907 25.2124 15.7559C25.2124 16.0211 25.1071 16.2755 24.9196 16.463Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <GoPlus className="md:text-[30px] text-[20px]" />
                      )}
                    </div>
                  </div>
                </div>
                {item.isOpen && (
                  <div className="lg:text-[24px] text-[16px] md:text-[20px] text-[#4B4B4B] px-2">
                    <p>{item.content}</p>

                    <ul className="mt-2 list-none list-disc">
                      {item.subtext?.map((text, index) => {
                        return (
                          <li key={index} className="mt-1">
                            {text.includes("Email Support") ? (
                              <>
                                - Email Support:{" "}
                                <strong>support@oursite.com</strong>.
                              </>
                            ) : text.includes("Phone Support") ? (
                              <>
                                - Phone Support:{" "}
                                <strong>+234-800-123-4567</strong> (Monday to
                                Friday, 9 AM to 5 PM).
                              </>
                            ) : (
                              text
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className="mx-2 border-[#080808] border-b-[1px] pt-2"></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className=" md:right-0 md:mr-6 absolute top-0 flex justify-center mt-6">
        <img src={faqImage} alt="Mascot" className="lg:w-40 w-32 h-auto p-1" />
      </div>
    </div>
  );
};

export default Faqs;

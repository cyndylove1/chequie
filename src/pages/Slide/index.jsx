import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chekee from "../../assets/images/Baddie Chequie.svg";
import { FaStar } from "react-icons/fa6";



const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setSlideIndex(next),
    customPaging: (i) => (
      <div
        className={`custom-dot ${
          i === slideIndex ? "active-dot" : ""
        }`} 
      />
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="">
      <div className="carousel-container lg:pt-[8rem] pt-[8rem] ">
        <div className="text-center lg:text-[48px] text-[30px] fw-medium md:fw-thin ">
          <h2>
            A <span className="text-[#008A48]">Mate</span> once said...
          </h2>
        </div>
        <div className="relative block justify-center h-[29rem] pt-10 md:px-[4rem] px-4 ">
          <div className="">
            <div className="overflow-hidden pb-20">
              <Slider {...settings} ref={sliderRef}>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className={`slide ${index === slideIndex ? "slide-active" : ""}`}
                  >
                    <div className="border-[2px] rounded-[12px] h-[29rem]">
                      <div className="flex justify-center pt-4">
                        <img src={chekee} alt="" className="h-[100px] w-[100px]" />
                      </div>
                      <div className="mt-4 text-center">
                        <h5 className="font-bold text-[28px]">Jane Bloom</h5>
                        <h6>Lagos, Nigeria</h6>
                        <p className="px-4 pt-4">
                          Chequemate is literally the best savings app ever.
                          Chequie loves to reward hard work. Safelock funds and get
                          the most competitive interest rates with Chequemate.
                        </p>
                      </div>
                      <div className="pt-6">
                        <div className="flex justify-center items-center">
                          <h2 className="text-[40px] fw-medium">4.5</h2>
                          <div className="">
                            <h5 className="mt-2 text-[20px] text-[#DCDCDC]">/5</h5>
                          </div>
                          
                        </div>
                        <div className="flex justify-center gap-[5px] pt-2 pb-10 items-center">
                        {Array(4).fill().map(()=>(
                          <div>
                            <h2 className="text-[#FFD433] text-[20px]"><FaStar/></h2>
                          </div>
                        ))}
                        <h2 className="text-[#E8E8E8] text-[20px]"><FaStar/></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div
            className="absolute md:left-[30px] left-[10px] top-1/2 transform -translate-y-1/2 border border-[#008A48] rounded-full h-[48px] w-[48px] flex items-center justify-center cursor-pointer"
            onClick={goToPrevious}
          >
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 -0.000488281C8 0.741512 7.267 1.84951 6.525 2.77951C5.571 3.97951 4.431 5.02651 3.124 5.82551C2.144 6.42451 0.956 6.99951 0 6.99951M0 6.99951C0.956 6.99951 2.145 7.57451 3.124 8.17351C4.431 8.97351 5.571 10.0205 6.525 11.2185C7.267 12.1495 8 13.2595 8 13.9995M0 6.99951L24 6.99951"
                stroke="#008A48"
                strokeWidth="1.6"
              />
            </svg>
          </div>
          <div
            className="absolute md:right-[30px] right-[10px] top-1/2 transform -translate-y-1/2 border border-[#008A48] rounded-full h-[48px] w-[48px] flex items-center justify-center cursor-pointer"
            onClick={goToNext}
          >
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -0.000488281C16 0.741512 16.733 1.84951 17.475 2.77951C18.429 3.97951 19.569 5.02651 20.876 5.82551C21.856 6.42451 23.044 6.99951 24 6.99951M24 6.99951C23.044 6.99951 21.855 7.57451 20.876 8.17351C19.569 8.97351 18.429 10.0205 17.475 11.2185C16.733 12.1495 16 13.2595 16 13.9995M24 6.99951L0 6.99951"
                stroke="#008A48"
                strokeWidth="1.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;

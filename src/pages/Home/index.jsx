import { useState, useEffect } from "react";
import badge1 from "../../assets/images/Mobile-App.svg";
import badge2 from "../../assets/images/Mobile-App 2.svg";
import hero from "../../assets/images/Landing.svg";
import Features from "../Features";
import Roadmap from "../RoadMap";
import Cheque from "../Cheque";
import Slide from "../Slide";
import Faqs from "../Faqs";
import  useHome from "./useHome"
import Modal from "../../components/Modal";
const Home = () =>{
    const {content} = useHome();
    return(
        <div>
            <div className="">
                <div className=" rotating-section bg-[#CCE1FD] md:w-[350px] w-[170px] h-[35px] md:h-[48px] flex items-center rounded-[60px] justify-center mt-14">
                    <h5 className="text-[#0052C4] rotating-text md:text-[16px] text-[8px] fw-bold">Over 1000+ USERS on CHEQUEMATE</h5>
                </div>
                <div className="">
                    <div className="fw-bolder md:pt-10 md:text-[55px] text-[25px] text-center md:leading-[65px]">
                        <div>Welcome to</div>
                        <div className="relative overflow-hidden md:h-[65px] flex justify-center gap-[8px]">
                            <div>
                            <h2>the World of Safe </h2>
                            </div>
                            <div className="scroll-container">
                            <div className="scroll-content">
                                {content.map((item, index) => (
                                <span key={index} className="block" style={{ color: item.color }}>
                                    {item.text}
                                </span>
                                ))}
                            </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center md:py-6 md:text-[24px] text-[16px] lg:w-[50%] w-full px-4 md:px-6 lg:px-0 mx-auto ">
                        Pool funds with friends & family, save with high interest rates,
                        <span className="">and pay bills easily with Chequemate app.</span>
                    </p>
                </div>
                <div className="flex items-center justify-center gap-4 pt-4 pb-6">
                    <img src={badge1} alt="" />
                    <img src={badge2} alt="" />
                </div>
            </div>
            <div className="">
                <img src={hero} alt="" className="" />
            </div>
             <div id="features">
                <Features/>
            </div>
            <Roadmap/>
            <Cheque/>
             <Slide/>
            <div id="faqs">
                <Faqs/>
            </div>   
             <Modal/>
        </div>
    )
}
export default Home;
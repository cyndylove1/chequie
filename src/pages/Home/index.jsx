import badge1 from "../../assets/images/Mobile App Store Badges.png";
import badge2 from "../../assets/images/Mobile App Store Badges (1).png";
import heroimg from "../../assets/images/Group.png";
import Features from "../Features";
import Roadmap from "../RoadMap";
import Cheque from "../Cheque";
import Slide from "../Slide";
import Faqs from "../Faqs";
const Home = () =>{
    return(
        <div>
            <div className="">
                <div className=" rotating-section bg-[#CCE1FD] md:w-[350px] w-[170px] h-[35px] md:h-[48px] flex items-center rounded-[60px] justify-center mt-14">
                    <h5 className="text-[#0052C4] rotating-text md:text-[16px] text-[8px]">Over 1000+ USERS on CHEQUEMATE</h5>
                </div>
                <div className="">
                    <div className="fw-medium md:pt-10 md:text-[55px] text-[20px] text-center md:leading-[65px]">
                       <div className="">
                            Welcome to  {" "}
                        </div>
                        <div className="relative overflow-hidden md:h-[65px] flex justify-center gap-[8px]">
                        <div>
                            <h2>the World of Safe </h2> 
                        </div> 
                            <div className="animate-scroll">
                                <p className="block">
                                    <span className="text-[#008A48] block">Ajo</span>
                                    <span className="text-[#4C4486] block">Esusu</span>
                                    <span className="block text-orange-500">Adashe</span>
                                    <span className="text-[#0052C4] block">ROSCA</span>
                                    <span className="text-[#f58088] block">Thrift</span>
                                </p>
                            </div>
                        </div> 
                    </div>
                    <p className="text-center md:py-6 md:text-[24px] text-[16px] lg:w-[50%] w-full px-4 md:px-6 lg:px-0 mx-auto ">
                        Pool funds with friends & family, save with high interest rates,
                        <span className="">and pay bills easily with Chequemate app.</span>
                    </p>
                </div>
                <div className="flex items-center justify-center gap-3 py-4 pb-20">
                    <img src={badge1} alt="" />
                    <img src={badge2} alt="" />
                </div>
            </div>
            <div>
                <img src={heroimg} alt="" className="h-[150px] md:h-fit w-full " />
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
             
        </div>
    )
}
export default Home;
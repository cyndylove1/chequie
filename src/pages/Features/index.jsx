import section1 from "../../assets/images/Section 1.svg";
import section2 from "../../assets/images/Section 2.svg";
import section3 from "../../assets/images/Section.svg";

import Access from "../Access";
const Features = () =>{
    return(
        <div className="px-4">
            <div className=" text-center">
                <h2 className="text-[15px] text-[#333333] fw-thin pt-[8rem]">FEATURES</h2>
                <h2 className="pt-4 lg:text-[40px] md:text-[25px] text-[20px]">We’ve made<span className="text-[#008A48]"> Group Savings</span> easy</h2>
            </div>
            <div className="flex items-center md:flex-row flex-col justify-center md:gap-[58px] gap-[20px] pt-[5rem] md:px-6 lg:px-0">
                <div>
                    <img src={section1} alt="" />
                </div>
                <div className="w-full lg:w-[40%] text-center md:text-left">
                    <h2 className="text-[#0052C4] lg:text-[30px] text-[25px] fw-medium py-2">Be part of a Savings Group</h2>
                    <h5 className="mb:md-0 pb-10">Create an Ajo Community with vetted partners ensuring you receive timely payments when it's your turn, fostering financial growth  through collaborative savings and support.</h5>
                </div>
            </div>
            <div className="flex items-center md:flex-row flex-col-reverse justify-center md:gap-[58px] gap-[20px] md:pt-0 lg:mt-[5rem] pt-[5rem] md:px-6 lg:px-0">
                <div className="w-full lg:w-[40%] text-center md:text-left">
                    <h2 className="lg:text-[30px] text-[25px] text-[#008A48] fw-medium py-2">Feel free to Save Alone</h2>
                    <h5 className="md:pb-0 pb-10">Save when you want and how you want. Whether you’re locking funds  towards achieving a goal or just because you have too much to cash, get attractive interest rates on the Chequemate app.
                    </h5>
                </div>
                <div className="">
                    <img src={section2} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-center md:gap-[58px] gap-[20px] lg:pt-[5rem] md:flex-row flex-col md:px-6 lg:px-6">
                <div>
                    <img src={section3} alt="" />
                </div>
                <div className="w-full lg:w-[40%] text-center md:text-left">
                    <div className="md:flex-row md:py-0 flex flex-col items-center justify-between">
                        <h2 className="text-[#4C4486] lg:text-[30px] text-[25px] fw-medium">Lock it for a while</h2>
                        <p className="w-[100px] h-[36px] bg-[#FFE3D0] text-[#FB4E00] text-[10px] flex justify-center items-center rounded-[20px]">COMING SOON</p>

                    </div>
                    <h5>Secure your savings by locking funds for a set period and build strong saving habits and achieving your financial goals with the support of a trusted community, all within the Chequemate app.</h5>
                </div>
            </div>
           <Access/>
            
            
        </div>
    )
}
export default Features;
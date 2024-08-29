import section1 from "../../assets/images/Section (1).png";
import section2 from "../../assets/images/Section.png";
import section3 from "../../assets/images/Section (2).png";
import duck from "../../assets/images/Frame 1171276166.png";
import Input from "../../components/Input";
const Features = () =>{
    return(
        <div className="px-4">
            <div className="md:text-[35px] text-[20px] text-center">
                <h2 className="text-[15px] text-[#333333] fw-thin pt-[8rem]">FEATURES</h2>
                <h2 className="pt-4">We’ve made<span className="text-[#008A48]"> Group Savings</span> easy</h2>
            </div>
            <div className="flex items-center md:flex-row flex-col justify-center gap-[58px] pt-[5rem] md:px-6 lg:px-0">
                <div>
                    <img src={section1} alt="" />
                </div>
                <div className="w-full lg:w-[40%] text-center md:text-left">
                    <h2 className="text-[#0052C4] lg:text-[30px] text-[25px] fw-medium py-2">Be part of a Savings Group</h2>
                    <h5 className="">Create an Ajo Community with vetted partners ensuring you receive timely payments when it's your turn, fostering financial growth  through collaborative savings and support.</h5>
                </div>
            </div>
            <div className="flex items-center md:flex-row flex-col-reverse justify-center gap-[58px] gap-[20px] pt-[5rem] md:px-6 lg:px-0">
                <div className="w-full lg:w-[40%] text-center md:text-left">
                    <h2 className="lg:text-[30px] text-[25px] text-[#008A48] fw-medium py-2">Feel free to Save Alone</h2>
                    <h5>Save when you want and how you want. Whether you’re locking funds  towards achieving a goal or just because you have too much to cash, get attractive interest rates on the Chequemate app.
                    </h5>
                </div>
                <div className="">
                    <img src={section2} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-center gap-[58px] pt-[5rem] md:flex-row flex-col md:px-6 lg:px-6">
                <div>
                    <img src={section3} alt="" />
                </div>
                <div className="w-full lg:w-[40%] text-center md:text-left">
                    <div className="md:flex-row md:py-0 flex flex-col items-center justify-between py-4">
                        <h2 className="text-[#4C4486] lg:text-[30px] text-[25px] fw-medium">Lock it for a while</h2>
                        <p className="w-[100px] h-[36px] bg-[#FFE3D0] text-[#FB4E00] text-[10px] flex justify-center items-center rounded-[20px]">COMING SOON</p>

                    </div>
                    <h5>Secure your savings by locking funds for a set period and build strong saving habits and achieving your financial goals with the support of a trusted community, all within the Chequemate app.</h5>
                </div>
            </div>
            <div>
                <h2 className="text-[15px] text-[#333333] fw-thin pt-[10rem] text-center">EARLY ACCESS</h2>
                <div className="flex items-center justify-center gap-[3rem] lg:pt-[6rem] pt-[2rem] md:flex-row flex-col px-6 ">
                    <div>
                        <img src={duck}alt="" className=""/>
                    </div>
                    <div className="text-center md:text-left w-full lg:w-[40%]">
                        <h2 className="lg:text-[48px] text-[26px]">Hi,<span className="text-[#008A48] ">I’m Chequie</span></h2>
                        <div className="">
                            <h5 className="lg:text-[30px] text-[15px] md:text-[17px]">
                                I share firsthand access to investment
                                opportunities, exclusive information, and 
                                sustainable savings updates. Subscribe 
                                to to my newsletter for early adopter 
                                benefits today.
                            </h5>

                        </div>
                        <div className="lg:mt-6 mt-4">
                            <Input props= "Become a Mate"/>

                        </div>
                       
                       
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}
export default Features;
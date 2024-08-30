import Input from "../../components/Input";
import duck from "../../assets/images/chequie.svg"
const Access = () =>{
    return(
        <div>
            <div>
                <h2 className="text-[15px] text-[#333333] fw-thin pt-[8rem] text-center">EARLY ACCESS</h2>
                <div className="flex items-center justify-center gap-[3rem] lg:pt-[6rem] pt-[2rem] md:flex-row flex-col px-6 ">
                    <div>
                        <img src={duck}alt="" className="w-fit h-fit"/>
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
export default Access;
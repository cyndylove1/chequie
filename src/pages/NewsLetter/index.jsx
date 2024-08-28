import duck from "../../assets/images/Frame 1171276195.png"
import Save from "../../components/Save";
const Newsletter = () =>{
    return(
        <div>
            <div className="flex lg:flex-row justify-center mt-16 px-4 w-full max-w-6xl relative flex-col">
                <div className="xl:pl-[10rem] lg:pl-[4rem] flex justify-center lg:justify-start ">
                    <img src={duck} alt="" className="md:-top-[5rem] absolute py-[40px] h-fit" />

                </div>
                <div className="flex-1 flex flex-col items-center pt-[15rem] md:pt-[10rem] lg:pt-0">
                    <div className="bg-[#E5E3F9] text-[#4C4486] md:text-[20px] text-[14px] rounded-full px-4 py-1 mb-2">
                    Savings Matter
                    </div>
                    <h1 className="md:text-[48px] text-[20px] fw-medium md:fw-thin text-[#008A48] text-center">Chequie’s Newsletter</h1>
                    <p className="text-[#707070] text-center max-w-xl md:text-[20px] text-[14px] mt-2">
                    We won’t spam you with information you don’t need, we promise! Join thousands of 
                    <span className="[#008A48]"> Mates </span> 
                    to get exclusive deals on Savings, career tips and share success stories with Ajo contributions on Chequemate.
                    </p>

                    <form className="flex flex-col space-y-4 mt-8 w-full max-w-sm">
                        <label htmlFor="" className="text-[#707070]">First Name</label>
                        <input
                            type="text"
                            placeholder="Your first name"
                            className="border border-[#AFAFAF] rounded-lg md:h-[80px] h-[48px] px-4 py-2 focus:outline-none focus:border-green-600"
                        />
                        <label htmlFor="" className="text-[#707070]">Email Address</label>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="border border-[#AFAFAF] rounded-lg px-4 py-2 md:h-[80px] h-[48px] focus:outline-none focus:border-green-600"
                        />
                        <button
                            type="submit"
                            className="bg-[#008A48] text-white py-2 md:h-[80px] h-[48px] text-[16px] rounded-lg "
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                    <p className="text-[#505050] text-[20px] mt-4">
                    Unsubscribe at any time
                    </p>

                </div>
               
            </div>
            <Save/>
          
            
        </div>
    )
}
export default Newsletter;
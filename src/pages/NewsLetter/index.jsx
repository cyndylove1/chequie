import duck from "../../assets/images/Frame 1171276195.png"
import Save from "../../components/Save";
const Newsletter = () =>{
    return (
      <div>
        <div className="lg:flex-row relative flex flex-col justify-center w-full max-w-6xl px-4 mt-16">
          <div className="xl:pl-[10rem] lg:pl-[4rem] flex justify-center lg:justify-start ">
            <img
              src={duck}
              alt=""
              className="md:-top-[5rem] absolute py-[10px] md:py-[60px] h-fit"
            />
          </div>
          <div className="flex-1 flex flex-col items-center pt-[13rem] md:pt-[10rem] lg:pt-0">
            <div className="bg-[#E5E3F9] text-[#4C4486] md:text-[20px] text-[14px] rounded-full px-4 py-1 mb-2">
              Savings Matter
            </div>
            <h1 className="md:text-[48px] text-[20px] text-[#008A48] text-center fw-medium">
              Chequie’s Letters
            </h1>
            <p className="text-[#707070] text-center max-w-xl md:text-[20px] text-[14px] mt-2">
              Once every week, I drop a letter or two in your inbox. They’re
              usually about exclusive Savings challenges, the latest updates on
              Ajo & Solo savings, career tips, success stories, and more from
              Chequemate.
            </p>

            <form className="flex flex-col w-full max-w-sm mt-8 space-y-4">
              <label htmlFor="" className="text-[#707070]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="border border-[#AFAFAF] rounded-lg h-[48px] bg-white px-4 py-2 focus:outline-none focus:border-green-600"
              />
              <label htmlFor="" className="text-[#707070]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="border border-[#AFAFAF] rounded-lg px-4 py-2 bg-white h-[48px] focus:outline-none focus:border-green-600"
              />
              <button
                type="submit"
                className="bg-[#008A48] text-white py-2 h-[48px] text-[16px] rounded-lg font-bold "
              >
                SUBSCRIBE
              </button>
            </form>
            <button className="text-[#505050] p-2 font-bold rounded-[8px] text-[14px] mt-4 border-[1px] border-[#AFAFAF] ">
              Unsubscribe
            </button>
          </div>
        </div>
        <Save />
      </div>
    );
}
export default Newsletter;
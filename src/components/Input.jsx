const Input = ({props}) =>{
    return(
        <div className="lg:justify-start flex justify-center ">
            <form action="" className="flex items-center overflow-hidden md:w-[380px] xl:w-[450px] w-full h-[56px] rounded-[80px] border-[1px] mt-4 lg:mt-0 ">
                <input type="text"
                className=" outline-none w-[100%] h-[56px] px-4 bg-white "
                placeholder="Enter email address"
                />
                <button className="h-[56px] bg-[#008A48] text-[#fff] w-[60%] block md:text-[18px] text-[12px] text-nowrap">
                    <h5 className="">{props}</h5>

                </button>
            </form>
        </div>
    )
}
export default Input;
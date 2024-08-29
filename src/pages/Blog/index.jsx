import { Link } from "react-router-dom";
import blog from "../../assets/images/Rectangle 5.png";
import Save from "../../components/Save";
const Blog = () =>{
    return(
        <div className="">
            <div className="">
                <div className="flex xl:gap-[4rem] gap-[2rem] xl:px-20 md:px-10 px-6 pt-10 md:flex-row flex-col">
                    <div>
                        <Link to={"/blog2"}>
                            <img src={blog} alt="" className="rounded-[16px]" />
                        </Link>
                       
                        <div className="pt-2">
                            <h4 className="text-[#008A48] text-[24px] fw-bold py-2">The right saving plan</h4>
                            <p className="text-20px]">What savings plan work for you and how to save rightly</p>

                        </div> 
                    </div>
                    <div>
                        <div>
                            <h2 className="fw-bold md:text-[28px] text-[20px]">Top Blogs</h2>
                        </div>
                        {Array(6).fill().map(()=>(
                            <div className="py-6">
                                <h5 className="text-[16px] text-[#008A48]">Save rightly</h5>
                                <p className="text-[14px]">What savings plan work for you and how to save rightly</p>
                            </div>
                        ))}
                    </div>
                
                </div>
               
            </div>
            <div>
                <div className="text-center lg:text-[48px] text-[25px] pt-[10rem] pb-4">
                    <h2><span className="text-[#008A48] fw-medium">Chequemate’s </span> Blog</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:px-20 md:px-10 px-6 gap-[20px]">
                    {Array(9).fill().map(()=>(
                        <div>
                            <div className="">
                                 <img src={blog} alt="" className="rounded-[16px] " />
                                <div className="pt-2 pb-10">
                                    <h4 className="text-[#008A48] text-[24px] fw-bold py-2">The right saving plan</h4>
                                    <p className="text-20px]">What savings plan work for you and how to save rightly</p>

                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Save/>
        </div>
    )
}
export default Blog;
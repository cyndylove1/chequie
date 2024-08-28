import logo from "../assets/images/Logo (1).png";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import Input from "./Input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[40rem] md:-top-[30rem] left-0 right-0 lg:mx-[10rem] rounded-[12px] h-[23rem] bg-white shadow-2xl z-10 mt-[20rem]"> 
        <div className="text-center pt-[5rem]">
          <h2 className="lg:text-[32px] text-[20px] font-bold px-2">
            Ready to Get Started with <span className="text-[#008A48]">Chequie?</span>
          </h2>
          <p className="md:text-[16px] text-[13px] py-2 leading-[30px] px-2">
            You can contact our support team via email at talk@chequemate.com or call us
            at +234-800-123-4567. Our team is available Monday to Friday, 9 a.m. to 5 p.m.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="w-[174px] h-[56px] bg-[#008A48] rounded-[50px] text-[18px] text-white fw-medium">
            Contact us
          </button>
        </div>
      </div>
      <div className="bg-[#008A48] h-fit">
        <div className=" pt-[5rem] h-fit">
          <div className="flex lg:px-6 xl:px-14 justify-evenly py-[5rem] xl:gap-[3rem] gap-[2rem] md:pt-[15rem] flex-col lg:flex-row px-6">
            <div className="">
              <div className="lg:justify-start flex justify-center">
                <img src={logo} alt="" />
                
              </div>
              <div className="">
                <h4 className="text-white text-[18px] pt-2 text-center lg:text-start ">Chequie helps pool funds with <br />friends & family, save with high interest <br /> rates,and pay bills easily.</h4>
                
              </div>
              
              <div className="flex text-[#fff] gap-[15px] mt-4 justify-center lg:justify-start">
                <div className="p-2 bg-black rounded-full">
                  <IoLogoInstagram className="text-[#fff]" />
                </div>
                <div className="p-2 bg-black rounded-full">
                  <TiSocialFacebook className="text-[#fff]" />
                </div>
                <div className="p-2 bg-black rounded-full">
                  <FaXTwitter className="text-[#fff]" />
                </div>
                <div className="p-2 bg-black rounded-full">
                  <GrLinkedinOption className="text-[#fff]" />
                </div>
              </div>
            </div>
            <div className=" lg:pt-0 justify-evenly flex xl:gap-[4rem] gap-[2rem] pt-10">
              <div>
                <h2 className="text-white text-[16px] fw-medium">Features</h2>
                <ul className="text-white">
                  <li className="py-[5px]">Group Savings</li>
                  <li className="py-[5px]">Solo Savings</li>
                  <li className="py-[5px]">Fixed Deposit</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-[16px] fw-medium">Resource</h2>
                <ul className="gap-[10px] text-white">
                  <Link to="/blog">
                    <li className="py-[5px]">Blog</li>
                  </Link>
                  <Link to="/newsletter">
                    <li className="py-[5px]">NewsLetter</li>
                  </Link>
                  <Link to="/terms&services">
                    <li className="py-[5px]">Terms & Services</li>
                  </Link>
                  <Link to="/privacy">
                    <li className="py-[5px]">Privacy Policy</li>
                  </Link>
                  <Link to="/help&support">
                    <li className="py-[5px]">Help & Support</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="md:mx-auto mb-[3rem]">
                <h2 className="p-2 text-white text-[18px] ">Subscribe to Newsletter</h2>
                <Input props="Subscribe" className="" />
              </div>
             
          </div>
          
        </div>
        <div className="text-center border-[#fff] border-t-[1px] pb-[3rem] xl:mx-[4rem] md:mx-[2rem]">
          <h5 className="py-6 text-white">Copyright 2024 &copy; The Owlet</h5>
        </div>

      </div>
    
      
    </div>
  );
};

export default Footer;

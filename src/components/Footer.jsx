import logo from "../assets/images/LOGOMARK-3.png";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import Form from "../components/Form"

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[40rem] md:-top-[30rem] left-0 right-0 lg:mx-[10rem] rounded-[12px] h-[23rem] bg-white shadow-2xl z-10 mt-[20rem]">
        <div className="text-center pt-[5rem]">
          <h2 className="lg:text-[32px] text-[20px] font-bold px-2">
            Ready to Get Started with{" "}
            <span className="text-[#008A48]">Chequie?</span>
          </h2>
          <p className="md:text-[16px] text-[13px] py-2 leading-[30px] px-2">
            You can contact our support team via email at{" "}
            <a
              href="mailto:support@chequemateapp.com"
              className="text-[#008A48] underline"
            >
              support@chequemateapp.com
            </a>{" "}
            or call us <br />
            <span className="text-[#008A48] underline">02013306493</span> Our
            team is available Monday to Friday, 9 a.m. to 5 p.m.
          </p>
        </div>
        <div className="md:mx-0 flex justify-center mx-6 mt-4">
          <button className="md:w-[174px] w-full h-[56px] bg-[#008A48] rounded-[50px] text-[18px] text-white fw-medium">
            Contact us
          </button>
        </div>
      </div>
      <div className="bg-[#008A48] h-fit">
        <div className=" pt-[5rem] h-fit">
          <div className="flex lg:px-6 xl:px-14 justify-evenly py-[5rem] xl:gap-[3rem] gap-[2rem] md:pt-[15rem] flex-col lg:flex-row px-6">
            <div className="w-full lg:w-[35%] md:w-[70%] mx-auto">
              <div className="lg:justify-start flex justify-center">
                <img
                  src={logo}
                  alt=""
                  className="h-[30px] md:h-[50px] lg:h-[40px] w-fit"
                />
              </div>
              
                <h4 className="text-white  md:text-[25px] lg:text-[18px] text-[18px] pt-4 text-center lg:text-start">
                  Earn up to 22% interest on Ajo savings and up to 18% on
                  Solo savings with Chequemate.
                </h4>
              

              <div className="flex text-[#fff] gap-[15px] mt-4 justify-center lg:justify-start">
                <a
                  href="https://www.instagram.com/mychequemateapp"
                  className="p-2 bg-black rounded-full"
                >
                  <IoLogoInstagram className="text-[#fff]" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61565955361317"
                  className="p-2 bg-black rounded-full"
                >
                  <TiSocialFacebook className="text-[#fff]" />
                </a>

                <a
                  href="https://x.com/Mychequemateapp"
                  className="p-2 bg-black rounded-full"
                >
                  <FaXTwitter className="text-[#fff]" />
                </a>
                <a
                  href="https://www.tiktok.com/@mychequemateapp?lang=ene"
                  className="p-2 bg-black rounded-full"
                >
                  <AiOutlineTikTok className="text-[#fff]" />
                </a>
              </div>
            </div>
            <div className=" lg:pt-0 flex xl:gap-[4rem] gap-[2rem] pt-10">
              {/* <div>
                <h2 className="text-white text-[16px] md:text-[20px] fw-medium">
                  Features
                </h2>
                <ul className="text-white md:text-[20px] lg:text-[15px]">
                  <li className="py-[5px]">Group Savings</li>
                  <li className="py-[5px]">Solo Savings</li>
                  <li className="py-[5px]">Fixed Deposit</li>
                </ul>
              </div> */}
              <div className=" md:mx-[9rem] lg:mx-0">
                <h2 className="text-white text-[16px] md:text-[20px] fw-medium">
                  Resource
                </h2>
                <ul className="gap-[5px] md:text-[20px] lg:text-[15px] text-white">
                  <Link to="/blog">
                    <li className="py-[5px]">Blog</li>
                  </Link>
                  <Link to="/newsletter">
                    <li className="py-[5px]">NewsLetter</li>
                  </Link>
                  <Link to="/terms-services">
                    <li className="py-[5px]">Terms & Services</li>
                  </Link>
                  <Link to="/privacy">
                    <li className="py-[5px]">Privacy Policy</li>
                  </Link>
                  <Link to="/help-support">
                    <li className="py-[5px]">Help & Support</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="md:mx-auto">
              <h2 className="p-2 text-white text-[18px] md:text-[25px] lg:text-[18px]">
                Subscribe to Newsletter
              </h2>
              <Form />
            </div>
          </div>
        </div>
        <div className="text-center border-[#fff] border-t-[1px] pb-[3rem] xl:mx-[4rem] md:mx-[2rem]">
          <h5 className="py-6 text-white">
            Copyright 2025 &copy; The Chequemate
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;

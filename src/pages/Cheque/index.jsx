import React from "react";
import interest from "../../assets/images/Section (3).png";
import chequie from "../../assets/images/Section (4).png";
import earn from "../../assets/images/Section (5).png";

const Cheque = () => {
  return (
    <div className="lg:mt-[10rem] mt-[50rem]">
      <div className="text-center fw-thin lg:text-[48px] text-[26px]">
        <h2 className="pb-6 fw-medium">
          Win at life with <span className="text-[#008A48]">Chequemate</span>
        </h2>
      </div>
      {/* Use grid or flexbox for responsive layout */}
      <div className="md:grid-cols-2 lg:grid-cols-3 xl:mx-24 md:mx-4 lg:mx-10 mx-0 gap-[30px] md:gap-[20px] grid grid-cols-1">
        {/* Interest Section */}
        <div className="text-center">
          <img src={interest} alt="" className="mx-auto"/>
          <h2 className="pt-[10px] text-[24px]">High Interest Rates</h2>
          <h5 className="md:text-[16px] px-4 mt-4">
            Chequie loves to reward hard work. Safelock 
            funds and get the most competitive interest 
            rates with chequemate app.
          </h5>
        </div>

        {/* Chequie Badges Section */}
        <div className="text-center">
          <img src={chequie} alt="" className="mx-auto" />
          <h2 className="pt-[10px] text-[24px]">Chequie Badges</h2>
          <h5 className="text-[16px] px-4 mt-4">
            Get premium access to a comfortable 
            world when you unlock Chequemate 
            badges with Chequie.
          </h5>
        </div>

        {/* Earn Referrals Section */}
        <div className="text-center">
          <img src={earn} alt="" className="mx-auto"/>
          <h2 className="pt-[10px] text-[24px]">Earn Referrals</h2>
          <h5 className="text-[16px] px-4  mt-4">
            Convert your referral points into cash 
            when you tell someone about 
            Chequemate.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Cheque;

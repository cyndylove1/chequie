import React from "react";
import interest from "../../assets/images/Section 4.svg";
import chequie from "../../assets/images/Section 5.svg";
import earn from "../../assets/images/Section 6.svg";

const Cheque = () => {
  return (
    <div className="lg:mt-[6rem] md:mt-[33rem] mt-[43rem]">
      <div className="text-center fw-thin lg:text-[48px] text-[26px]">
        <h2 className="fw-medium pb-6">
          Win at life with <span className="text-[#008A48]">Chequemate</span>
        </h2>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-3 xl:mx-24 md:mx-4 lg:mx-10 mx-0 gap-[30px] md:gap-[20px] grid grid-cols-1">
        <div className="text-center">
          <img src={interest} alt="" className="mx-auto"/>
          <h2 className="pt-[10px] text-[24px]">High Interest Rates</h2>
          <h5 className="md:text-[16px] px-4 mt-4">
            Chequie loves to reward hard work. Safelock 
            funds and get the most competitive interest 
            rates with chequemate app.
          </h5>
        </div>
        <div className="text-center">
          <img src={chequie} alt="" className="mx-auto" />
          <h2 className="pt-[10px] text-[24px]">Chequie Badges</h2>
          <h5 className="text-[16px] px-4 mt-4">
            Get premium access to a comfortable 
            world when you unlock Chequemate 
            badges with Chequie.
          </h5>
        </div>
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

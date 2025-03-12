import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const accordionData = {
  "Ajo Savings": [
    {
      id: 1,
      title: "How does Ajo savings work on Chequemate? ",
      content:
        "You can start saving with as little as ₦500. We believe in making  savings accessible and affordable to everyone.",
      isOpen: false,
    },
    {
      id: 2,
      title:
        "What are the benefits of saving in an Ajo group instead of solo savings?",
      content:
        "Simply sign up, create an Ajo group with friends and family, or opt join a secure public Ajo group that suits your needs!",
    },
    {
      id: 3,
      title: "How much interest does my group earn on Ajo savings?",
      content:
        "Interest rates vary depending on the type of savings plan you choose. Please check our Savings Plans page for detailed information on current rates.",
    },
    {
      id: 4,
      title: "How does my interest accrue?",
      content:
        "You can go to bed every night knowing you are on safe investment options with Chequemate. We use advanced security measures and partner with reputable financial institutions to secure your funds.",
    },
    {
      id: 5,
      title: "How do I create or join an Ajo group?  ",
      content:
        "We have flexible saving options that let you withdraw your savings at any time. However,some savings plans may have specific terms regarding early withdrawals. Please refer to your details and contact support for more information.",
    },
    {
      id: 6,
      title: "Can I create my own Ajo group with friends and family?  ",
      content:
        "You can contact our support team via email at support@chequemateapp.com or call us at 02013306493. Our team is available Monday to Friday, 9 a.m to 5 p.m.",
    },
    {
      id: 7,
      title: "How does Chequemate vet users to ensure they can be trusted?",
      content:
        "Need assistance? We're here to help! Whether you have questions about your account, need help joining an Ajo group, or want to understand more about our interest rates, our dedicated support team is ready to assist you.",
      subtext: [
        "- Email Support: Reach us at support@chequemateapp.com.",
        "- Phone Support: Call us at 02013306493 (Monday to Friday, 9 AM to 5 PM).",
        "- Live Chat: Available on our website from 9 AM to 5 PM, Monday to Friday.",
        "- Help Center: Visit our Help Center for FAQs, guides, and tutorials.",
      ],
    },
    {
      id: 8,
      title: "What happens if a member of my Ajo group defaults on payment?",
      content:
        "You can contact our support team via email at support@chequemateapp.com or call us at 02013306493. Our team is available Monday to Friday, 9 a.m to 5 p.m.",
    },
    {
      id: 9,
      title: "How is the payout order determined in an Ajo group?",
      content:
        "You can contact our support team via email at support@chequemateapp.com or call us at 02013306493. Our team is available Monday to Friday, 9 a.m to 5 p.m.",
    },
    {
      id: 10,
      title: "Are there any fees for participating in an Ajo savings group?",
      content:
        "You can contact our support team via email at support@chequemateapp.com or call us at 02013306493. Our team is available Monday to Friday, 9 a.m to 5 p.m.",
    },
  ],
  "Solo Savings": [
    {
      id: 11,
      title: "What is Solo Savings, and how is it different from Ajo Savings?",
      content:
        "Solo savings allows you to save individually without joining a group, giving you full control over your savings plan.",
    },
    {
      id: 12,
      title: "Can I set custom savings goals with Solo Savings?",
      content:
        "Simply go to the 'Solo Savings' section in the app and follow the setup process.",
    },
    {
      id: 13,
      title: "How do I automate my Solo Savings contributions?",
      content:
        "Simply go to the 'Solo Savings' section in the app and follow the setup process.",
    },
    {
      id: 14,
      title: "Is there a penalty for withdrawing my savings early?",
      content:
        "Simply go to the 'Solo Savings' section in the app and follow the setup process.",
    },
    {
      id: 15,
      title: "How much interest can I earn on my Solo Savings?",
      content:
        "Simply go to the 'Solo Savings' section in the app and follow the setup process.",
    },
    {
      id: 16,
      title: "How does my interest accrue?",
      content:
        "Simply go to the 'Solo Savings' section in the app and follow the setup process.",
    },
    {
      id: 17,
      title: "How does Chequemate help me stay consistent with my savings?",
      content:
        "Simply go to the 'Solo Savings' section in the app and follow the setup process.",
    },
  ],
  "App Safety & Fund Protection": [
    {
      id: 18,
      title: "Is my money safe with Chequemate?  ",
      content:
        "Yes! We prioritize security with end-to-end encryption and top-notch fraud protection measures.",
    },
    {
      id: 19,
      title: "Is Chequemate licensed and regulated?  ",
      content:
        "We partner with licensed financial institutions and use secure transaction protocols.",
    },
    {
      id: 20,
      title: "How does Chequemate protect my funds from fraud?",
      content:
        "We partner with licensed financial institutions and use secure transaction protocols.",
    },
    {
      id: 21,
      title:
        "What security measures does Chequemate use to keep my account safe?",
      content:
        "We partner with licensed financial institutions and use secure transaction protocols.",
    },
    {
      id: 22,
      title: "What happens if my phone is lost or stolen?  ",
      content:
        "We partner with licensed financial institutions and use secure transaction protocols.",
    },
    {
      id: 23,
      title: "Can I recover my money if my account is hacked?",
      content:
        "We partner with licensed financial institutions and use secure transaction protocols.",
    },
    {
      id: 24,
      title: "Are my personal details and banking information secure?",
      // content:
      //   "We partner with licensed financial institutions and use secure transaction protocols.",
    },
    {
      id: 25,
      title: "How do I report suspicious activity or fraud?",
      // content:
      //   "We partner with licensed financial institutions and use secure transaction protocols.",
    },
  ],
  "More questions you may have": [
    {
      id: 26,
      title: "What more does Chequemate have for me? ",
      content: "Here, we talk about referrals, points, and badge levels.",
      // "Yes, you can withdraw your savings at any time without penalties.",
    },
    {
      id: 27,
      title: "How do I fund my Chequemate wallet?",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 28,
      title: "Can I withdraw my savings at any time? ",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 29,
      title: "What are the charges for withdrawals or transfers? ",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 30,
      title: "How long does it take to receive my payout?",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 31,
      title: "What happens if I miss a contribution to my Ajo group?",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 32,
      title: "How do I contact Chequemate customer support? ",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 33,
      title: "Can I invite friends and earn rewards?",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 34,
      title: "Does Chequemate offer loans or credit based on my savings?",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
    {
      id: 35,
      title: "What happens to my savings if I stop using the app?",
      content:
        "You can reach us via email at support@chequemate.com or call our support hotline.",
    },
  ],
};

const SavingsContent = ({ activeButton }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const activeData = accordionData[activeButton] || [];

  return (
    <div className="w-full lg:px-[4rem] md:px-2 px-6 lg:pt-[2rem] pt-[2rem] p-4">
      {activeData.length > 0
        ? activeData.map((item) => (
            <div key={item.id} className="border-b-[1px] border-[#080808] py-6">
              <div
                onClick={() => handleAccordionClick(item.id)}
                className="focus:outline-none flex items-center justify-between w-full py-4 text-lg text-left"
              >
                <div className="fw-medium md:text-[28px] text-[16px]">
                  {item.title}
                </div>
                <span className="">
                  {openItemId === item.id ? (
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="20" fill="#008A48" />
                      <path
                        d="M24.9196 16.463L21.384 19.9985L24.9196 23.5341C25.1071 23.7216 25.2124 23.976 25.2124 24.2412C25.2124 24.5064 25.1071 24.7607 24.9196 24.9483C24.732 25.1358 24.4777 25.2412 24.2124 25.2412C23.9472 25.2412 23.6929 25.1358 23.5053 24.9483L19.9698 21.4127L16.4343 24.9483C16.2467 25.1358 15.9924 25.2412 15.7272 25.2412C15.462 25.2412 15.2076 25.1358 15.0201 24.9483C14.8325 24.7607 14.7272 24.5064 14.7272 24.2412C14.7272 23.976 14.8325 23.7216 15.0201 23.5341L18.5556 19.9985L15.0201 16.463C14.8325 16.2755 14.7272 16.0211 14.7272 15.7559C14.7272 15.4907 14.8325 15.2363 15.0201 15.0488C15.2076 14.8613 15.4619 14.7559 15.7272 14.7559C15.9924 14.7559 16.2467 14.8613 16.4343 15.0488L19.9698 18.5843L23.5053 15.0488C23.6929 14.8613 23.9472 14.7559 24.2124 14.7559C24.4777 14.7559 24.732 14.8613 24.9196 15.0488C25.1071 15.2363 25.2124 15.4907 25.2124 15.7559C25.2124 16.0211 25.1071 16.2755 24.9196 16.463Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <GoPlus className="md:text-[30px] text-[20px]" />
                  )}
                </span>
              </div>
              {openItemId === item.id && (
                <div>
                  <p className="lg:text-[24px] text-[16px] md:text-[20px] text-[#4B4B4B]">
                    {item.content}
                  </p>
                  {/* <div className="lg:text-[24px] text-[16px] md:text-[20px] text-[#4B4B4B]">
                    {item.subtext?.length > 0 && (
                      <ul className="mt-2 list-none">
                        {item.subtext.map((text, index) => (
                          <li key={index} className="mt-1">
                            {text.includes("Email Support") ? (
                              <>
                                - Email Support:{" "}
                                <strong>support@chequemateapp.com</strong>.
                              </>
                            ) : text.includes("Phone Support") ? (
                              <>
                                - Phone Support: <strong>02013306493</strong>{" "}
                                (Monday to Friday, 9 AM to 5 PM).
                              </>
                            ) : (
                              text
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div> */}
                </div>
              )}
            </div>
          ))
        : ""}
    </div>
  );
};

export default SavingsContent;

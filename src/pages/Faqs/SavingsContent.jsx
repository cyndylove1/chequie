import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const accordionData = {
  "Ajo Savings": [
    {
      id: 1,
      title: "How does Ajo savings work on Chequemate? ",
      content:
        "Ajo savings is a group savings system where members contribute a fixed amount regularly. Each cycle, one member receives the full payout, and the cycle continues until all members have been paid.",
      isOpen: false,
    },
    {
      id: 2,
      title:
        "What are the benefits of saving in an Ajo group instead of solo savings?",
      content: "",
      subtext: [
        "● Access to lump sum payouts for financial needs.",
        "●	Encourages disciplined savings.",
        "●	Builds community trust and accountability.",
        "●	Security deposit ensures minimal risk of default.",
      ],
    },
    {
      id: 3,
      title: "How much interest does my group earn on Ajo savings?",
      content: " Up to 20% per annum on security deposits.",
    },
    {
      id: 4,
      title: "How does my interest accrue?",
      content:
        "It accrues based on the longevity of your Ajo cycle. A breakdown of interest is given before you join an Ajo Squad group.",
    },
    {
      id: 5,
      title: "How do I create or join an Ajo group?  ",
      content:
        "You can browse public Ajo groups on Chequemate and request to join. Private Ajo groups require an invitation from the admin.",
    },
    {
      id: 6,
      title: "Can I create my own Ajo group with friends and family?  ",
      content:
        "Yes! You can create a private Ajo group and invite trusted members to participate.",
    },
    {
      id: 7,
      title: "How does Chequemate vet users to ensure they can be trusted?",
      content:
        "Users are vetted using KYC and a Trust Score system based on their financial history.",
    },
    {
      id: 8,
      title: "What happens if a member of my Ajo group defaults on payment?",
      content:
        "A security deposit is required upfront to cover potential defaults. Users with a poor Trust Score may also be restricted from joining new groups.",
    },
    {
      id: 9,
      title: "How is the payout order determined in an Ajo group?",
      content:
        "Payout order is determined based on members’ Trust Scores, which reflect their savings reliability.",
    },
    {
      id: 10,
      title: "Are there any fees for participating in an Ajo savings group?",
      content:
        "Chequemate does not charge fees for joining Ajo groups, but transaction and processing fees may apply for certain transfers.",
    },
  ],
  "Solo Savings": [
    {
      id: 11,
      title: "What is Solo Savings, and how is it different from Ajo Savings?",
      content:
        "Solo Savings is an individual savings plan where you save towards a goal at your own pace. Unlike Ajo, Solo Savings does not involve a group payout system.",
    },
    {
      id: 12,
      title: "Can I set custom savings goals with Solo Savings?",
      content:
        "Yes! You can define a target amount and a savings timeline to achieve your goal.",
    },
    {
      id: 13,
      title: "How do I automate my Solo Savings contributions?",
      content:
        "Recurring deposits are automatically set up from your Chequemate wallet.",
    },
    {
      id: 14,
      title: "Is there a penalty for withdrawing my savings early?",
      content:
        "Solo savings accounts have penalties for early withdrawals, and customers will lose any accrued interest. Wallet savings allow you to withdraw anytime without penalties.",
    },
    {
      id: 15,
      title: "How much interest can I earn on my Solo Savings?",
      content:
        "Yes! Depending on the savings plan, you may earn interest on your deposits.",
    },
   
    {
      id: 17,
      title: "How does Chequemate help me stay consistent with my savings?",
      content:
        "Chequemate provides automated reminders, goal tracking, and incentives to keep you on track.",
    },
  ],
  "App Safety & Fund Protection": [
    {
      id: 18,
      title: "Is my money safe with Chequemate?  ",
      content:
        "Yes! Funds are securely managed and protected through financial regulations and security measures.",
    },
    {
      id: 19,
      title: "Is Chequemate licensed and regulated?  ",
      content:
        "Yes, Chequemate operates under regulatory compliance and partners with licensed financial institutions.",
    },
    {
      id: 20,
      title: "How does Chequemate protect my funds from fraud?",
      content:
        "We use advanced fraud detection, encryption, and multi-factor authentication to prevent fraud.",
    },
    {
      id: 21,
      title:
        "What security measures does Chequemate use to keep my account safe?",
      content: "",
      subtext: [
        "●	Two-factor authentication (2FA).",
        "●	Data encryption.",
        "●	Fraud monitoring.",
      ],
    },
    {
      id: 22,
      title: "What happens if my phone is lost or stolen?  ",
      content:
        "You can log into your account from another device and reset your credentials for security.",
    },
    {
      id: 23,
      title: "Can I recover my money if my account is hacked?",
      content:
        "Yes, report the incident to Chequemate support immediately. If verified, we will work to recover your funds.",
    },
    {
      id: 24,
      title: "Are my personal details and banking information secure?",
      content:
        "Yes, we follow strict data protection policies to keep your information safe.",
    },
    {
      id: 25,
      title: "How do I report suspicious activity or fraud?",
      content: "Contact our support team immediately.",
    },
  ],
  "More questions you may have": [
    {
      id: 27,
      title: "How do I fund my Chequemate wallet?",
      content:
        "You can fund your wallet via bank transfer, debit card, or mobile payment options available in the app.",
    },
    {
      id: 28,
      title: "Can I withdraw my savings at any time? ",
      content:
        "Yes, however, solo savings may have restrictions on early withdrawals. ",
    },
    {
      id: 29,
      title: "What are the charges for withdrawals or transfers? ",
      content:
        "Minimal transaction fees apply for withdrawals and external transfers.",
    },
    {
      id: 30,
      title: "How long does it take to receive my payout?",
      content:
        "Ajo payouts are processed instantly once it is your turn. Bank transfers may take up to 24 hours.",
    },
    {
      id: 31,
      title: "What happens if I miss a contribution to my Ajo group?",
      content:
        "Missed payments may affect your Trust Score and prevent future participation. After the grace period set by the admin, penalties will be deducted from the security deposit as well.",
    },
    {
      id: 32,
      title: "How do I contact Chequemate customer support? ",
      content:
        "You can reach us via the in-app support chat, email, or helpline.",
    },
    {
      id: 33,
      title: "Can I invite friends and earn rewards?",
      content:
        "Yes! Chequemate offers referral bonuses when you invite friends who successfully save.",
    },
    {
      id: 34,
      title: "Does Chequemate offer loans or credit based on my savings?",
      content:
        "Not at the moment, but we plan to introduce credit-based features in the future.",
    },
    {
      id: 35,
      title: "What happens to my savings if I stop using the app?",
      content:
        "Your savings remain secure, and you can withdraw anytime. However, inactive accounts for extended periods may be subject to dormancy policies.",
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
                <div className="fw-medium md:text-[20px] lg:text-[28px] text-[16px]">
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
                  <div className="lg:text-[24px] text-[16px] md:text-[20px] text-[#4B4B4B]">
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
                  </div>
                </div>
              )}
            </div>
          ))
        : ""}
    </div>
  );
};

export default SavingsContent;

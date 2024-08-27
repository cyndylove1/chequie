import Save from "../../components/Save";
import Title from "../../components/Title";

const TermsAndServices = () => {
  const terms = [
    "Acceptance of Terms: You accept these terms and conditions by using our services.",
    "User Responsibilities: Users must provide accurate information and keep their account details confidential.",
    "Service Availability: We strive to ensure our services are available 24/7 but do not guarantee uninterrupted access.",
    "Interest Rates: Interest rates on savings are subject to change and will be communicated to users promptly.",
    "Withdrawals: Terms for withdrawals vary by savings plan. Please review your plan details.",
    "Termination: We reserve the right to terminate accounts that violate our terms.",
    "Governing Law: These terms are governed by the laws of Nigeria.",
  ];

  return (
    <div>
        <div>
            <Title title="Terms & Services" />
            <p className="xl:text-[24px] md:text-[20px] text-[14px] text-center xl:pt-10 pt-4 md:px-10 px-0 md:w-[70%] w-full mx-auto">
            Welcome to Chequemate! By accessing and using our services, you agree
            to comply with and be bound by the following terms and conditions:
           
            </p>
        </div>

        <div className="xl:mt-[6rem] md:mt-[3rem] mt-[1rem] md:mx-10 mx-4">
            <ul>
            {terms.map((term, index) => (
                <li key={index} className="flex items-center h-fit mb-4">
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4"
                >
                    <rect width="60" height="60" rx="30" fill="#CCE8DA" />
                    <path
                    d="M30 18L33.2411 26.7589L42 30L33.2411 33.2411L30 42L26.7589 33.2411L18 30L26.7589 26.7589L30 18Z"
                    fill="#008A48"
                    />
                </svg>
                <span className="md:text-[20px] text-[14px]">{term}</span>
                </li>
            ))}
            </ul>
        </div>

      <Save />
    </div>
  );
};

export default TermsAndServices;

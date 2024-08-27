import Save from "../../components/Save";
import Title from "../../components/Title";

const PrivacyAndSupport = () =>{
    const privacy = [
        "Information Collection: We collect information you provide during account creation, transactions, and interactions with our services.",
        "Use of Information: We use your information to provide, improve, and personalize our services.",
        "Data Protection: We implement robust security measures to protect your data from unauthorized access.",
        "Cookies: Our website uses cookies to enhance your experience. You can control cookie settings through your browser.",
        "Third-Party Sharing: We do not share your personal information with third parties, except as required by law.",
        "Your Rights: You have the right to access, correct, or delete your personal information.",
    ];
    return(
        <div>
            
            <div>
                <Title title="Privacy Policy" />
                <p className="xl:text-[24px] md:text-[20px] text-[14px] text-center xl:pt-10 pt-4 md:px-10 px-0 md:w-[70%] w-full mx-auto">
                    Your privacy is the most important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information.
                </p>
            </div>

            <div className="xl:mt-[6rem] md:mt-[3rem] mt-[1rem] md:mx-10 mx-4">
                <ul>
                    {privacy.map((privacy, index) => (
                        <li key={index} className="flex items-center h-fit mb-4 w-fit">
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
                        <span className="md:text-[20px] text-[14px]">{privacy}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Save/>
  
        </div>
    )
}
export default PrivacyAndSupport;
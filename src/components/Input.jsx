import { useState } from "react";
const Input = ({props}) =>{
//     const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     const formData = new FormData();
//     formData.append('CONTACT_EMAIL', email);

//     try {
//       const response = await fetch('https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287eccb4ae05&zx=1333b49e6&tD=112a0bf46db0c67a9&sD=112a0bf46db0d61a1', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Subscription successful!');
//         setEmail(''); // Clear the email input field
//       } else {
//         alert('Subscription failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };
    return(
        <div className="lg:justify-start flex justify-center">
            <form action="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287eccb4ae05&zx=1333b49e6&tD=112a0bf46db0c67a9&sD=112a0bf46db0d61a1" method="POST" id="zcampaignOptinForm" target="_zcSignup" className="flex items-center overflow-hidden md:w-[380px] xl:w-[450px] w-full h-[56px] rounded-[80px] border-[1px] mt-4 lg:mt-0">
                <input 
                type="email"
                name="CONTACT_EMAIL"
                className=" outline-none w-[100%] h-[56px] px-4 bg-white "
                placeholder="Enter email address"
                required
                />
                <button className="h-[56px] bg-[#008A48] text-[#fff] w-[60%] block md:text-[18px] text-[12px] text-nowrap">
                    <h5 className="">{props}</h5>
                </button>
            </form>
        </div>
        
    )
}
export default Input;
import  {useState} from "react";

const useFaqs = () =>{
    const [accordion, setAccordion] = useState([
        { id: 1, title: 'What is the minimum amount required to start saving?', content: 'You can start saving with as little as ₦500. We believe in making  savings accessible and affordable to everyone.', isOpen: false},
        { id: 2, title: 'How do I join a Chequemate Ajo group?', content: 'Simply sign up, create an Ajo group with friends and family,or opt join a secure public Ajo group that suits your needs!'},
        { id: 3, title: 'What interest rate can I expect on my savings?', content: 'Interest rates vary depending on the type of savings plan you choose. Please check our Savings Plans page for detailed information on current rates.'},
        { id: 4, title: 'Is my money safe?', content: 'you can go to bed every night knowing you are on safe investment options with Chequemate. We use advanced security measures and partner with reputable financial institutions to secure your funds.'},
        { id: 5, title: 'Can I withdraw my savings at any time?', content:'We have flexible saving options that let you withdraw your savings at any time.However,some savings plans may have specific terms regarding early withdrawals.Please refer to your details and contact support for more information.'},
        { id: 6, title: 'How do I contact customer support?', content:'You can contact our support team via email at talk@chequemate.com or call us at +234-800-123-4567. Our team is available Monday to Friday, 9 a.m to 5 p.m.'},

    ]); 

    
    const handleAccordionClick = (index) => {
        setAccordion(prevAccordion =>
            prevAccordion.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : item.isOpen
            }))
        );
    };

    

  
    return { accordion, handleAccordionClick, };

}
export default useFaqs;

import  {useState} from "react";

const useFaqs = () =>{
    const [accordion, setAccordion] = useState([
        { id: 1, title: 'What is the minimum amount required to start saving?', content: 'You can start saving with as little as ₦500. We believe in making  savings accessible and affordable to everyone.', isOpen: false},
        { id: 2, title: 'How do I join a Chequemate Ajo group?'},
        { id: 3, title: 'What interest rate can I expect on my savings?'},
        { id: 4, title: 'Is my money safe?'},
        { id: 5, title: 'Can I withdraw my savings at any time?'},
        { id: 6, title: 'How do I contact customer support?'},

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

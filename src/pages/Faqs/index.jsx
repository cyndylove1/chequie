import { GoPlus } from "react-icons/go";
import useFaqs from './useFaqs';

const Faqs = () => {
    const { handleAccordionClick, accordion} = useFaqs();
    

    return (
        <div>
            <div className="mb-[25rem]">
                <div className="text-center lg:pt-[15rem] pt-[10rem] ">
                    <h2 className="fw-bolder md:text-[35px] text-[25px]">Frequently Asked Questions</h2>
                    <h5 className="md:text-[22px] text-[15px] fw-bold ">We`re happy to answer your questions</h5>
                </div>

                <div className='w-full lg:px-[6rem] px-2 lg:pt-[5rem] pt-[2rem]'>
                    <div>
                        {accordion.map((item, i) => (
                            <div key={i} className='mb-4 text-black cursor-pointer' 
                            onClick={() =>{ handleAccordionClick(i); setActiveIndex(item.isOpen ? null : i)}}>
                                <div className='p-4'>
                                    <div className='flex items-center justify-between p-3'>
                                        <div className='fw-medium md:text-[28px] text-[16px]'>{item.title}</div>
                                        <div>
                                            {item.isOpen ? (
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="#008A48"/>
                                                <path d="M24.9196 16.463L21.384 19.9985L24.9196 23.5341C25.1071 23.7216 25.2124 23.976 25.2124 24.2412C25.2124 24.5064 25.1071 24.7607 24.9196 24.9483C24.732 25.1358 24.4777 25.2412 24.2124 25.2412C23.9472 25.2412 23.6929 25.1358 23.5053 24.9483L19.9698 21.4127L16.4343 24.9483C16.2467 25.1358 15.9924 25.2412 15.7272 25.2412C15.462 25.2412 15.2076 25.1358 15.0201 24.9483C14.8325 24.7607 14.7272 24.5064 14.7272 24.2412C14.7272 23.976 14.8325 23.7216 15.0201 23.5341L18.5556 19.9985L15.0201 16.463C14.8325 16.2755 14.7272 16.0211 14.7272 15.7559C14.7272 15.4907 14.8325 15.2363 15.0201 15.0488C15.2076 14.8613 15.4619 14.7559 15.7272 14.7559C15.9924 14.7559 16.2467 14.8613 16.4343 15.0488L19.9698 18.5843L23.5053 15.0488C23.6929 14.8613 23.9472 14.7559 24.2124 14.7559C24.4777 14.7559 24.732 14.8613 24.9196 15.0488C25.1071 15.2363 25.2124 15.4907 25.2124 15.7559C25.2124 16.0211 25.1071 16.2755 24.9196 16.463Z" fill="white"/>
                                                </svg>
                                            ) : (
                                                <GoPlus className="md:text-[30px] text-[20px]" /> 
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {item.isOpen && (
                                    <div className='px-7 pb-4 lg:text-[24px] text-[16px] text-[#4B4B4B]'>
                                        {item.content}
                                    </div>
                                )}
                                <div className='border-[#080808] border-b-[2px] mx-7'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;

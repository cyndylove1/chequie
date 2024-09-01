import  React from "react";
const Modal = ({isModalOpen, handleCloseModal }) =>{
    
    return(
        <div>
            
            {isModalOpen && (
                <div className="lg:flex fixed inset-0 z-50 flex items-center justify-center hidden bg-black bg-opacity-50">
                    <div className="h-[300px] w-[500px] text-center bg-white rounded-lg shadow-lg">
                        <div className="justify-center pt-20">
                            <h2 className="text-[30px] font-bold mb-4">Coming Soon!!!</h2>
                            
                        </div>
                        <button
                        className="bg-[#008A48] py-2 px-4 text-white text-[16px] rounded-[4px] mt-4"
                        onClick={handleCloseModal}
                        >
                        Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Modal;
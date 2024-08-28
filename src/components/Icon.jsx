import React from "react";
import { PiStarFourFill } from "react-icons/pi";
const Icon = () =>{
    return(
        <li className="flex items-start gap-4 pb-3">
            <span className="bg-[#CCE8DA] text-green-600 rounded-full p-2 ">
                <PiStarFourFill />
            </span>
        </li>
    )
}
export default Icon;
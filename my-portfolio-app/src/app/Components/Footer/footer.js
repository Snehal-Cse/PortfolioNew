import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="flex flex-row w-screen h-16 justify-center items-center font-extrabold text-base shadow-[0px_0px_0px_0.5px] ">
        <h1 className="mr-4 text-2xl font-['Georgia']">Connect With Me~</h1>
        <div className = "w-16 flex flex-row justify-between text-lg ">
       <div className ="cursor-pointer"> <FaInstagramSquare /></div>
       <div className ="cursor-pointer"> <FaLinkedin /></div>
       <div className ="cursor-pointer"> <FaSquareWhatsapp /></div>
        </div>
      </div>
    )
}
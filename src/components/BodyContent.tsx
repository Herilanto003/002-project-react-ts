import FormContact from "./FormContact"
import ContactSvg from "../../public/images/contact.svg";
import { FaPhone } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";

export default function BodyContent() {
  return (
    <div className="w-full px-40">
      <div className="py-4"></div>
      <h1 className="uppercase text-5xl font-bold text-justify mb-4">contact us</h1>
      <p className="text-justify mb-4 uppercase font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae accusamus tempore animi, quas, ex laudantium nihil error, omnis a qui excepturi. Molestiae accusamus tempore animi, quas, ex laudantium nihil error, omnis a qui excepturi.
      </p>

      <div className="flex items-center">
        <div className="w-1/2">
          <div className="flex justify-between items-center gap-4">
            <button className="border-2 border-blue-500 px-3 py-2 rounded-md w-full font-semibold text-blue-500 flex items-center justify-center gap-1 hover:text-white hover:bg-blue-500 transition"><IoIosChatbubbles /> <span>Via support chat</span></button>

            <button className="border-2 border-blue-500 px-3 py-2 rounded-md w-full font-semibold text-blue-500 flex items-center justify-center gap-1 hover:text-white hover:bg-blue-500 transition"><FaPhone /> <span>Via call</span></button>
          </div>


          <FormContact />
        </div>

        <div className="w-1/2">
          <img src={ContactSvg} alt="contact image" />
        </div>
      </div>
    </div>
  )
}
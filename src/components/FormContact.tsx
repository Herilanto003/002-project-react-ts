import { IoIosSend } from "react-icons/io";

export default function FormContact() {
  return (
    <form>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="name" className="font-semibold">Name:</label>
        <input type="text" id="name" name="name" required className="border border-black rounded-sm p-2 focus:border-blue-500 outline-blue-500" placeholder="Enter Your name"/>
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="email" className="font-semibold">Email:</label>
        <input type="text" id="email" name="email" required className="border border-black rounded-sm p-2 focus:border-blue-500 outline-blue-500" placeholder="Enter Your email"/>
      </div>
      
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="message" className="font-semibold">Message:</label>
        <textarea name="message" rows={4} id="message" className="border border-black rounded-sm p-2 focus:border-blue-500 outline-blue-500" placeholder="Write here Your message"></textarea>
      </div>

      <button className="font-bold w-full p-2 flex justify-center items-center gap-2 text-white bg-blue-500 hover:bg-blue-700 transition rounded-sm text-xl">
        <IoIosSend />
        <span>Send</span>
      </button>
    </form>
  )
}
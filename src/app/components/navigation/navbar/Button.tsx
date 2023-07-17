import GetInTouch from "@/app/getInTouch/page";
import Link from "next/link";

const Button = () => {
    return (
        <Link href="/getInTouch">
             <button className="h-12 rounded-full bg-violet-500 hover:bg-violet-600 px-8 py-2 font-monteserrat text-white text-lg text-bold">Get In Touch</button>
        </Link>
       
      );
};

export default Button;
import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="fixed top-4 right-4 md:top-auto md:right-6 md:bottom-auto z-50">
            <a
                href="#register"
                className="bg-[#f4efe7] px-4 py-2 flex items-center rounded-full gap-2 shadow-lg hover:bg-[#e8e3db] transition-colors"
            >
                <span className="text-[#2a2725] text-xs font-semibold tracking-wide">Register</span>
                <MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-6 h-6 rounded-full p-1 flex-shrink-0" />
            </a>
        </div>
    );
};

export default ReserveBtn;

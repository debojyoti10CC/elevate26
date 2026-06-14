import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="fixed top-8 right-4 md:top-10 md:right-6 z-50">
            <a
                href="https://forms.gle/mgs8gNcX4RSVPfiv8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#eae4f5] px-4 py-2 flex items-center rounded-full gap-2 shadow-lg hover:bg-[#e8e3db] transition-colors"
            >
                <span className="text-[#181126] text-xs font-semibold tracking-wide">Register</span>
                <MdArrowOutward className="bg-[#181126] text-[#9a8eb7] w-6 h-6 rounded-full p-1 flex-shrink-0" />
            </a>
        </div>
    );
};

export default ReserveBtn;

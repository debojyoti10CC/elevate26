import { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { feedbackH1LG, feedbackReviewLG } from "../../constants/feedback";

import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";

const reviewImages = { review1, review2, review3 };

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const total = feedbackH1LG.length;

    const handleNext = () => setIndex((prev) => (prev + 1) % total);
    const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);

    const progressWidth = feedbackReviewLG[index][3];

    return (
        <section className="w-full px-5 md:px-8 py-16 md:h-dvh flex flex-col justify-center">
            <p className="text-[0.65rem] font-bold text-[#eae5dd] mb-4">
                Do people like us?
            </p>

            <h1 className="text-[#f4efe7] text-3xl md:text-7xl mt-2 mb-6 leading-tight">
                {feedbackH1LG[index].map((line, i) => (
                    <span key={i}>{line}<br /></span>
                ))}
            </h1>

            <div className="flex items-center gap-4 mt-8">
                <img
                    src={reviewImages[feedbackReviewLG[index][2]]}
                    alt="reviewer"
                    className="w-12 md:w-[4.5vw] rounded-2xl object-cover"
                />
                <p className="text-[#aca192] text-xs">
                    {feedbackReviewLG[index][0]}<br />
                    ({feedbackReviewLG[index][1]})
                </p>
            </div>

            <div className="flex justify-between items-center mt-10 md:mt-14">
                <div className="flex gap-2">
                    <button
                        onClick={handlePrev}
                        className="border border-[#aaa090] hover:bg-[#aaa090] rounded-full p-2 transition-colors"
                    >
                        <IoMdArrowBack className="text-[#f1ece4] w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="border border-[#aaa090] hover:bg-[#aaa090] rounded-full p-2 transition-colors"
                    >
                        <IoMdArrowForward className="text-[#f1ece4] w-5 h-5" />
                    </button>
                </div>

                <div className="relative w-40 md:w-70 h-[1px] bg-[#4f4b48] flex-shrink-0">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#f4efe7] transition-all duration-500"
                        style={{ width: progressWidth }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Feedback;

import { AddSign, MinusSign } from "../../../assets/svg";
import { useAppState, useAppDispatch } from "../../../utils/AppContext";
import { FaqItems } from "./faqItems"

const Faq = () => {
  const { openFaqs } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <section className="max-w-[1280px] mx-auto py-20 px-8">
      <div className="grid grid-cols-3">
        <h2 className="text-5xl font-medium text-[#01A7E1]">FAQs</h2>
        <div className="col-span-2 flex flex-col gap-4">
          {FaqItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFCFC] p-5  rounded-xl cursor-pointer"
              onClick={() => dispatch({ type: "TOGGLE_FAQ",payload: idx })}
            >
              <div className="flex justify-between mb-4 relative">
                <p className="text-lg">{item.question}</p>
                <div className="transition-all duration-300 ease-in">
                  <AddSign
                    className={`text-[#01A7E1] text-2xl absolute right-2 ${
                      openFaqs[idx] ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <MinusSign
                    className={`text-[#01A7E1] text-2xl absolute right-2 ${
                      openFaqs[idx] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
              <p
                className={`text-gray-500 transition-all duration-500 ease-in-out ${
                  openFaqs[idx] ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
                } overflow-hidden`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

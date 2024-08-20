import { useState, ReactNode } from "react";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  const [internalOpen, setInternalOpen] = useState(false);

  return (
    <div
      onClick={() => setInternalOpen(!internalOpen)}
      className="border-[0.8px] h-fit hover:cursor-pointer border-[#E4E7ED] w-full rounded-xl bg-white text-[#272829] flex flex-col justify-between py-[14px] px-6 "
    >
      <div className="flex flex-row justify-between">
        <p>{question}</p>
        {internalOpen ? (
          <img src="./Home/minus-faq.svg" draggable="false" width="20"/>
        ) : (
          <img src="./Home/plus-faq.svg" draggable="false" width="20" />
        )}
      </div>

      {internalOpen ? (
        <p className="mt-2 text-[#4D4F52] text-sm pr-4">{answer}</p>
      ) : null}
    </div>
  );
}

export default FAQItem;

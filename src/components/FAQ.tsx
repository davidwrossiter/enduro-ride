import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <div className="w-full flex flex-col items-center py-16">
      <div className="max-w-[1250px] w-full">
        <p className="font-semibold text-[36px] leading-[100%] text-center text-[#131414]">
          Questions? We’re glad you asked
        </p>
        <p className="text-center text-[#4D4F52] leading-[140%] mt-2">
          If we missed any questions you’re welcome to shoot through an email{" "}
          <span className="underline">here</span>
        </p>
        <div className="mt-8 flex flex-col md:flex-row">
          <div className="w-full flex flex-col gap-2">
            <FAQItem
              question="What LLMs do we support?"
              answer="We currently support Claude 3.5 Sonnet, GPT-4o, GPT-4o-mini, Llama-3.1-8b, Llama-3.1-70b, and Llama-3.1-405b."
            />
            <FAQItem
              question="Is wilson free?"
              answer="Wilson is still new, so we need as many people testing it as possible, and it is completely free for the moment."
            />
            <FAQItem
              question="How do I integrate wilson with my codebase?"
              answer={
                <span>
                  To integrate wilson in your codebase you must use the wilson
                  CLI tool which can be downloaded{" "}
                  <a
                    className="underline"
                    href="https://www.npmjs.com/package/@wilsonai/cli."
                  >
                    here
                  </a>
                  . All instructions on how to use it are at that link.
                </span>
              }
            />
            <FAQItem
              question="Do you have an enterprise plan?"
              answer={
                <span>
                  We have an enterprise plan which is only available upon
                  request, please get in touch on{" "}
                  <a className="underline" href="/contact">
                    this form
                  </a>{" "}
                  if you would like to know more.
                </span>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-2 mt-2 md:mt-0 md:ml-2">
            <FAQItem
              question="Can I use my own API keys?"
              answer={
                <span>
                  We currently don't support the use of external API keys.
                  Contact us{" "}
                  <a className="underline" href="/contact">
                    here
                  </a>{" "}
                  if are interested in having this feature added.
                </span>
              }
            />
            <FAQItem
              question="Can I use wilson inside of VS Code?"
              answer="Wilson doesn't have a direct VS Code integration. You can link any repository in any IDE from the command line, but can only chat with wilson in the browser."
            />
            <FAQItem
              question="How can I contact support?"
              answer={
                <span>
                  You can contact support{" "}
                  <a className="underline" href="/contact">
                    here
                  </a>{" "}
                  with any queries you might have, we are always happy to help
                  out!
                </span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

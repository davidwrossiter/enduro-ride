import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="font-inter flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1000px] px-7 pt-[108px] pb-20">
        <h1 className="text-[40px] font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm mb-6">Last Updated: March 21, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-3">Enduro Seal ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
            <p className="mb-3">This Privacy Policy applies to the information we collect when you use our website, [your-website-url], and make purchases through our website or through links to Amazon.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-3">We collect minimal information needed to provide our services. The personal information we may collect includes:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li>Contact information (such as name and email address) when you contact us through our website</li>
              <li>Technical data, including IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
              <li>Usage data, including information about how you use our website</li>
            </ul>
            <p className="mb-3"><strong>We do not use cookies or any tracking technologies on our website.</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and ensure it is presented in the most effective manner for you</li>
              <li>To administer and protect our business and website (troubleshooting, data analysis, testing, system maintenance, support, reporting)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Legal Basis for Processing</h2>
            <p className="mb-3">We process your personal data on the following legal grounds:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li>Where necessary for our legitimate interests, provided your interests and fundamental rights do not override those interests</li>
              <li>Where necessary to comply with a legal obligation</li>
              <li>With your consent, where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Data Sharing and Transfers</h2>
            <p className="mb-3">We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li>With service providers who perform services on our behalf</li>
              <li>If required by law or to respond to legal process</li>
              <li>To protect our rights, property, or safety, or that of our customers or others</li>
            </ul>
            <p className="mb-3">When you click on "Buy on Amazon" links on our website, you will be redirected to Amazon's website. Please note that Amazon's privacy policy will apply to information collected by Amazon.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Data Security</h2>
            <p className="mb-3">We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
            <p className="mb-3">We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and are subject to a duty of confidentiality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Data Retention</h2>
            <p className="mb-3">We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Your Legal Rights</h2>
            <p className="mb-3">Under data protection laws, you have rights including:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li><strong>Right to access</strong> - You can request copies of your personal data.</li>
              <li><strong>Right to rectification</strong> - You can request that we correct inaccurate personal data.</li>
              <li><strong>Right to erasure</strong> - You can request that we delete your personal data.</li>
              <li><strong>Right to restrict processing</strong> - You can request we restrict the processing of your personal data.</li>
              <li><strong>Right to data portability</strong> - You can request the transfer of your personal data to you or a third party.</li>
              <li><strong>Right to object</strong> - You can object to the processing of your personal data.</li>
            </ul>
            <p className="mb-3">You will not have to pay a fee to access your personal data or to exercise any of the other rights. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. Third-Party Links</h2>
            <p className="mb-3">Our website may include links to third-party websites, including Amazon. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. Changes to the Privacy Policy</h2>
            <p className="mb-3">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
            <p className="mb-3">We encourage you to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">11. Contact Us</h2>
            <p className="mb-3">If you have any questions about this Privacy Policy or our privacy practices, you can contact us with this <span><a className="hover:underline text-blue-500" href="/contact">form</a></span>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
